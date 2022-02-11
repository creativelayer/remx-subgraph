import { BigInt } from "@graphprotocol/graph-ts"
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
import { ExampleEntity } from "../generated/schema"

export function handleAddPayeeEvent(event: AddPayeeEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.param0 = event.params.param0
  entity.param1 = event.params.param1

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.PAYOUT_ROLE(...)
  // - contract.balanceOf(...)
  // - contract.getRoleAdmin(...)
  // - contract.hasRole(...)
  // - contract.isRegistered(...)
  // - contract.owner(...)
  // - contract.registerCollection(...)
  // - contract.supportsInterface(...)
}

export function handleBuyEvent(event: BuyEvent): void {}

export function handleDepositEvent(event: DepositEvent): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayoutEvent(event: PayoutEvent): void {}

export function handleRegisterCollectionEvent(
  event: RegisterCollectionEvent
): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleRoyaltyEvent(event: RoyaltyEvent): void {}

export function handleSweepEvent(event: SweepEvent): void {}

export function handleWithdrawEvent(event: WithdrawEvent): void {}
