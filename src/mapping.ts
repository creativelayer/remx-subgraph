import {
  RevenueSplitter,
  AddPayeeEvent,
  RemovePayeeEvent,
  BuyEvent,
  DepositEvent,
  PayoutEvent,
  CreateCollectionEvent,
  RoyaltyEvent,
  SweepEvent,
  WithdrawEvent
} from "../generated/RevenueSplitter/RevenueSplitter"
import { Record, AccountRecord, Account, Collection, CollectionPayee, CollectionRecord } from "../generated/schema"

import { Address, log, ethereum, store } from '@graphprotocol/graph-ts'

function getRecord(id: string, eventType: string, event: ethereum.Event): Record {
  const transaction = event.transaction
  let record = Record.load(id)
  if (!record) {
    record = new Record(id)
  }

  record.from = getAccount(transaction.from.toHex()).id

  // there may not be a to address (its nullable)
  if (transaction.to) {
    record.to = getAccount((transaction.to as Address).toHexString()).id
  }

  record.value = transaction.value
  record.fee = transaction.gasPrice
  record.timestamp = event.block.timestamp

  record.event = eventType
  return record
}

function getCollection(collectionId: string): Collection {
  let collection = Collection.load(collectionId)
  if (!collection) {
    collection = new Collection(collectionId)
    collection.save()
  }
  return collection
}

function getAccountRecord(id: string, recordId: string, accountId: string): AccountRecord {
  let accountRecord = AccountRecord.load(id)
  if (!accountRecord) {
    accountRecord = new AccountRecord(id)
  }

  accountRecord.record = recordId
  accountRecord.account = accountId
  accountRecord.save()

  return accountRecord

}

function getCollectionRecord(id: string, recordId: string, collectionId: string): CollectionRecord {
  let collectionRecord = CollectionRecord.load(id)
  if (!collectionRecord) {
    collectionRecord = new CollectionRecord(id)
  }

  collectionRecord.record = recordId
  collectionRecord.collection = collectionId
  collectionRecord.save()

  return collectionRecord
}

function getAccount(id: string): Account {
  let account = Account.load(id)
  if (!account) {
    account = new Account(id)
  }
  account.save()
  return account
}

function getCollectionPayee(id: string, collectionId: string, payeeId: string, shares: i32): CollectionPayee {
  let collectionPayee = CollectionPayee.load(id)
  if (!collectionPayee) {
    collectionPayee = new CollectionPayee(id)
  }

  collectionPayee.account = payeeId
  collectionPayee.shares = shares
  collectionPayee.collection = collectionId
  collectionPayee.save()

  return collectionPayee
}

export function handleAddPayeeEvent(event: AddPayeeEvent): void {
  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'AddPayee', event)

  const collection = getCollection(event.params.collection.toHex())
  record.collection = collection.id

  record.save()

  // make sure all the accounts exist as entities
  const payee = getAccount(event.params.account.toHex())

  // link the payee to the collection
  getCollectionPayee(`${collection.id}-${payee.id}`, collection.id, payee.id, event.params.shares.toI32())

  // link the record to the payee so it shows up as the account being added as a payee
  getAccountRecord(`${record.id}-${payee.id}`, record.id, payee.id)

  // link the record to the collection so it shows up as the payee being added to the collection
  getCollectionRecord(`${record.id}-${collection.id}`, record.id, collection.id)
}

export function handleRemovePayeeEvent(event: RemovePayeeEvent): void {
  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'RemovePayee', event)
  const collection = getCollection(event.params.collection.toHex())
  record.collection = collection.id

  record.save()

  // make sure all the accounts exist as entities
  const payee = getAccount(event.params.account.toHex())

  // disconnect the payee from the collection by removing the related entity
  store.remove('CollectionPayee', `${collection.id}-${payee.id}}`)
}

export function handleBuyEvent(event: BuyEvent): void {
  //emit BuyEvent(_collection, tokenId, msg.value);
  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'Buy', event)

  // create or fetch collection
  const collectionId = event.params.collection.toHex()
  let collection = getCollection(collectionId)
  collection.totalRevenue = collection.totalRevenue.plus(event.transaction.value)
  collection.save()

  record.collection = collectionId

  record.token = event.params.tokenId.toI32()

  record.save()

  getCollectionRecord(`${record.id}-${collection.id}`, record.id, collection.id)
}

export function handleDepositEvent(event: DepositEvent): void {
  // emit DepositEvent(_collection, _collectionPayee.payee, deposit);
  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'Deposit', event)

  const collection = getCollection(event.params.collection.toHex())
  record.collection = collection.id

  // override to so we can see the payee getting the deposit, not the contract
  const payee = getAccount(event.params.payee.toHex())
  payee.totalRevenue = payee.totalRevenue.plus(event.params.amount)
  payee.save()
  record.to = payee.id

  // override the msg.value with the actual amount deposited for the payee
  record.value = event.params.amount

  record.save()

  let collectionPayee = CollectionPayee.load(`${collection.id}-${payee.id}`)
  if (collectionPayee) {
    collectionPayee.totalRevenue = collectionPayee.totalRevenue.plus(event.params.amount)
    collectionPayee.save()
  }

  // link the record to the payee
  getAccountRecord(`${record.id}-${payee.id}`, record.id, payee.id)
}

export function handlePayoutEvent(event: PayoutEvent): void {
  //    emit PayoutEvent(_payee, amount);
  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'Payout', event)

  // override to so we can see the payee getting the deposit, not the contract
  const payee = getAccount(event.params.payee.toHex())
  record.to = payee.id

  // override the msg.value with the actual amount deposited for the payee
  record.value = event.params.amount

  record.save()

  //connect to account that was paid
  getAccountRecord(`${record.id}-${payee.id}`, record.id, payee.id)
}

export function handleCreateCollectionEvent(
  event: CreateCollectionEvent): void {

  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'CollectionRegistered', event)

  const collection = getCollection(event.params.collection.toHex())
  record.collection = collection.id

  record.save()

  getCollectionRecord(`${record.id}-${collection.id}`, record.id, collection.id)
}

export function handleRoyaltyEvent(event: RoyaltyEvent): void {
  //emit RoyaltyEvent(_collection, amount);
  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'Royalty', event)

  // create or fetch collection
  const collectionId = event.params.collection.toHex()
  let collection = getCollection(collectionId)
  record.collection = collectionId

  //override value with amount from event
  record.value = event.params.amount

  record.save()

  getCollectionRecord(`${record.id}-${collection.id}`, record.id, collection.id)
}

export function handleSweepEvent(event: SweepEvent): void {
  //emit SweepEvent(_payee, _recipient, amount);
  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'Sweep', event)

  // override from so we can see the payee sending the money (not us)
  const payee = getAccount(event.params.payee.toHex())
  record.from = payee.id

  // override to so we can see the actual recipient getting the value
  const recipient = getAccount(event.params.recipient.toHex())
  record.to = recipient.id

  // override the msg.value with the actual amount swept from the payee
  record.value = event.params.amount

  record.save()

  // link the record to the payee and the recipient?
  getAccountRecord(`${record.id}-${payee.id}`, record.id, payee.id)
  getAccountRecord(`${record.id}-${recipient.id}`, record.id, recipient.id)
}

export function handleWithdrawEvent(event: WithdrawEvent): void {

  const record = getRecord(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`, 'Withdrawal', event)

  const payee = getAccount(event.params.payee.toHex())
  record.to = payee.id

  // override the msg.value with the actual amount deposited for the payee
  record.value = event.params.amount

  record.save()

  // link the record to the payee
  getAccountRecord(`${record.id}-${payee.id}`, record.id, payee.id)
}
