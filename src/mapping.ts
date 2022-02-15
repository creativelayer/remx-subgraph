import {
  RevenueSplitter,
  AddPayeeEvent,
  BuyEvent,
  DepositEvent,
  OwnershipTransferred,
  PayoutEvent,
  RegisterCollectionEvent,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RoyaltyEvent,
  SweepEvent,
  WithdrawEvent
} from "../generated/RevenueSplitter/RevenueSplitter"
import { Record, AccountRecord, Account, Collection, CollectionPayee , CollectionRecord } from "../generated/schema"

import { Address, log } from '@graphprotocol/graph-ts'

export function handleAddPayeeEvent(event: AddPayeeEvent): void {
  const recordId = `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`
  let record = Record.load(recordId)
  if (!record) {
    record = new Record(recordId)
  }
  record.event = "AddPayee"

  const collectionId = event.params.collection.toHex()
  let collection = Collection.load(collectionId)
  if (!collection) {
    collection = new Collection(collectionId)
    collection.save()
  }
  record.collection = collectionId

  const payeeId = event.params.account.toHex()
  let collectionPayee = CollectionPayee.load(payeeId)
  if (!collectionPayee) {
    collectionPayee = new CollectionPayee(payeeId)
    collectionPayee.account = collectionPayee.id
    collectionPayee.collection = event.params.collection.toHex()
    collectionPayee.shares = event.params.shares.toI32()
  }

  record.from = event.transaction.from.toHex()
  let from = Account.load(record.from)
  if (!from) {
    from = new Account(record.from)
    from.save()
  }

  if (event.transaction.to) {
    const accountId = (event.transaction.to as Address).toHexString()
    if (!Account.load(accountId)) {
      new Account(accountId).save()
    }
    record.to = accountId
  }

  record.value = event.transaction.value
  record.fee = event.transaction.gasPrice

  record.save()

  // link the record to the payee so it shows up as the account being added as a payee
  const accountRecordId = `${payeeId}-${record.id}`
  let accountRecord = AccountRecord.load(accountRecordId)
  if (!accountRecord) {
    accountRecord = new AccountRecord(accountRecordId)
    accountRecord.record = record.id
    accountRecord.account = record.from
    accountRecord.save()
  }

  // link the record to the collection so it shows up as the payee being added to the collection
  const collectionRecordId = `${collectionId}-${record.id}`
  let collectionRecord = CollectionRecord.load(collectionRecordId)
  if (!collectionRecord) {
    collectionRecord = new CollectionRecord(collectionRecordId)
    collectionRecord.record = record.id
    collectionRecord.collection = record.from
    collectionRecord.save()
  }

}

export function handleBuyEvent(event: BuyEvent): void {
  //emit BuyEvent(_collection, tokenId, msg.value);
  const recordId = `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`
  let record = Record.load(recordId)
  if (!record) {
    record = new Record(recordId)
  }
  record.event = "Buy"

  record.from = event.transaction.from.toHex()
  let from = Account.load(record.from)
  if (!from) {
    from = new Account(record.from)
    from.save()
  }

  if (event.transaction.to) { //always revenue share contract address
    const accountId = (event.transaction.to as Address).toHexString()
    if (!Account.load(accountId)) {
      new Account(accountId).save()
    }
    record.to = accountId
  }

  // create or fetch collection
  const collectionId = event.params.collection.toHex()
  let collection = Collection.load(collectionId)
  if (!collection) {
    collection = new Collection(collectionId)
    collection.save()
  }
  record.collection = collectionId

  record.token = event.params.tokenId.toI32()
  // event.params.amount == event.transaction.value
  record.value = event.transaction.value
  record.fee = event.transaction.gasPrice

  record.save()

  const collectionRecordId = `${record.from}-${record.id}`
  let collectionRecord = CollectionRecord.load(collectionRecordId)
  if (!collectionRecord) {
    collectionRecord = new CollectionRecord(collectionRecordId)
    collectionRecord.record = record.id
    collectionRecord.collection = record.from
    collectionRecord.save()
  }

}

export function handleDepositEvent(event: DepositEvent): void {
  // emit DepositEvent(_collection, _collectionPayee.payee, deposit);
  const recordId = `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`
  let record = Record.load(recordId)
  if (!record) {
    record = new Record(recordId)
  }
  record.event = "Deposit"

  const collectionId = event.params.collection.toHex()
  let collection = Collection.load(collectionId)
  if (!collection) {
    collection = new Collection(collectionId)
    collection.save()
  }
  record.collection = collectionId

  const payeeId = event.params.payee.toHex()
  let payee = Account.load(payeeId)
  if (!payee) {
    payee = new Account(payeeId)
  }
  record.to = payeeId
  
  record.value = event.params.amount
  record.fee = event.transaction.gasPrice

  record.save()

  // link the record to the payee
  const accountRecordId = `${payeeId}-${record.id}`
  let accountRecord = AccountRecord.load(accountRecordId)
  if (!accountRecord) {
    accountRecord = new AccountRecord(accountRecordId)
    accountRecord.record = record.id
    accountRecord.account = payeeId
    accountRecord.save()
  }

}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayoutEvent(event: PayoutEvent): void {}

export function handleRegisterCollectionEvent(
  event: RegisterCollectionEvent
): void {
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleRoyaltyEvent(event: RoyaltyEvent): void {}

export function handleSweepEvent(event: SweepEvent): void {}

export function handleWithdrawEvent(event: WithdrawEvent): void {}
