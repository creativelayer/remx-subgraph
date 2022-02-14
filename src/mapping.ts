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
  let record = Record.load(event.transaction.hash.toHex())
  if (!record) {
    record = new Record(event.transaction.hash.toHex())
  }
  record.event = "AddPayee"

  let collection = Collection.load(event.params.collection.toHex())
  if (!collection) {
    collection = new Collection(event.params.collection.toHex())
    collection.save()
  }
  record.collection = event.params.collection.toHex()

  let collectionPayee = CollectionPayee.load(event.params.account.toHex())
  if (!collectionPayee) {
    collectionPayee = new CollectionPayee(event.params.account.toHex())
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
    if (!Account.load((event.transaction.to as Address).toHexString())) {
      new Account((event.transaction.to as Address).toHexString()).save()
    }
    record.to = (event.transaction.to as Address).toHexString()
  }

  record.value = event.transaction.value
  record.fee = event.transaction.gasPrice

  record.save()

  let accountRecord = AccountRecord.load(`${record.from}-${record.id}`)
  if (!accountRecord) {
    accountRecord = new AccountRecord(`${record.from}-${record.id}`)
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
