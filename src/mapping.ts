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
import { Record, AccountRecord, Account, Collection, CollectionPayee } from "../generated/schema"

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

  const accountRecordId = `${record.from}-${record.id}`
  let accountRecord = AccountRecord.load(accountRecordId)
  if (!accountRecord) {
    accountRecord = new AccountRecord(accountRecordId)
    accountRecord.record = record.id
    accountRecord.account = record.from
    accountRecord.save()
  }
}

export function handleBuyEvent(event: BuyEvent): void {}

export function handleDepositEvent(event: DepositEvent): void {}

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
