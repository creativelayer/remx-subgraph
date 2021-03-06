// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddPayeeEvent extends ethereum.Event {
  get params(): AddPayeeEvent__Params {
    return new AddPayeeEvent__Params(this);
  }
}

export class AddPayeeEvent__Params {
  _event: AddPayeeEvent;

  constructor(event: AddPayeeEvent) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BuyEvent extends ethereum.Event {
  get params(): BuyEvent__Params {
    return new BuyEvent__Params(this);
  }
}

export class BuyEvent__Params {
  _event: BuyEvent;

  constructor(event: BuyEvent) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CreateCollectionEvent extends ethereum.Event {
  get params(): CreateCollectionEvent__Params {
    return new CreateCollectionEvent__Params(this);
  }
}

export class CreateCollectionEvent__Params {
  _event: CreateCollectionEvent;

  constructor(event: CreateCollectionEvent) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DepositEvent extends ethereum.Event {
  get params(): DepositEvent__Params {
    return new DepositEvent__Params(this);
  }
}

export class DepositEvent__Params {
  _event: DepositEvent;

  constructor(event: DepositEvent) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get payee(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PayoutEvent extends ethereum.Event {
  get params(): PayoutEvent__Params {
    return new PayoutEvent__Params(this);
  }
}

export class PayoutEvent__Params {
  _event: PayoutEvent;

  constructor(event: PayoutEvent) {
    this._event = event;
  }

  get payee(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RemovePayeeEvent extends ethereum.Event {
  get params(): RemovePayeeEvent__Params {
    return new RemovePayeeEvent__Params(this);
  }
}

export class RemovePayeeEvent__Params {
  _event: RemovePayeeEvent;

  constructor(event: RemovePayeeEvent) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoyaltyEvent extends ethereum.Event {
  get params(): RoyaltyEvent__Params {
    return new RoyaltyEvent__Params(this);
  }
}

export class RoyaltyEvent__Params {
  _event: RoyaltyEvent;

  constructor(event: RoyaltyEvent) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SweepEvent extends ethereum.Event {
  get params(): SweepEvent__Params {
    return new SweepEvent__Params(this);
  }
}

export class SweepEvent__Params {
  _event: SweepEvent;

  constructor(event: SweepEvent) {
    this._event = event;
  }

  get payee(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawEvent extends ethereum.Event {
  get params(): WithdrawEvent__Params {
    return new WithdrawEvent__Params(this);
  }
}

export class WithdrawEvent__Params {
  _event: WithdrawEvent;

  constructor(event: WithdrawEvent) {
    this._event = event;
  }

  get payee(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RevenueSplitter extends ethereum.SmartContract {
  static bind(address: Address): RevenueSplitter {
    return new RevenueSplitter("RevenueSplitter", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PAYOUT_ROLE(): Bytes {
    let result = super.call("PAYOUT_ROLE", "PAYOUT_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PAYOUT_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PAYOUT_ROLE", "PAYOUT_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createCollection(
    name: string,
    symbol: string,
    royaltyAmount: BigInt
  ): Address {
    let result = super.call(
      "createCollection",
      "createCollection(string,string,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(royaltyAmount)
      ]
    );

    return result[0].toAddress();
  }

  try_createCollection(
    name: string,
    symbol: string,
    royaltyAmount: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createCollection",
      "createCollection(string,string,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(royaltyAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRegistered(_collection: Address): boolean {
    let result = super.call("isRegistered", "isRegistered(address):(bool)", [
      ethereum.Value.fromAddress(_collection)
    ]);

    return result[0].toBoolean();
  }

  try_isRegistered(_collection: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isRegistered", "isRegistered(address):(bool)", [
      ethereum.Value.fromAddress(_collection)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddCollectionPayeeCall extends ethereum.Call {
  get inputs(): AddCollectionPayeeCall__Inputs {
    return new AddCollectionPayeeCall__Inputs(this);
  }

  get outputs(): AddCollectionPayeeCall__Outputs {
    return new AddCollectionPayeeCall__Outputs(this);
  }
}

export class AddCollectionPayeeCall__Inputs {
  _call: AddCollectionPayeeCall;

  constructor(call: AddCollectionPayeeCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _payee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get shares(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddCollectionPayeeCall__Outputs {
  _call: AddCollectionPayeeCall;

  constructor(call: AddCollectionPayeeCall) {
    this._call = call;
  }
}

export class BuyNFTCall extends ethereum.Call {
  get inputs(): BuyNFTCall__Inputs {
    return new BuyNFTCall__Inputs(this);
  }

  get outputs(): BuyNFTCall__Outputs {
    return new BuyNFTCall__Outputs(this);
  }
}

export class BuyNFTCall__Inputs {
  _call: BuyNFTCall;

  constructor(call: BuyNFTCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class BuyNFTCall__Outputs {
  _call: BuyNFTCall;

  constructor(call: BuyNFTCall) {
    this._call = call;
  }
}

export class CreateCollectionCall extends ethereum.Call {
  get inputs(): CreateCollectionCall__Inputs {
    return new CreateCollectionCall__Inputs(this);
  }

  get outputs(): CreateCollectionCall__Outputs {
    return new CreateCollectionCall__Outputs(this);
  }
}

export class CreateCollectionCall__Inputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get royaltyAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateCollectionCall__Outputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DepositRoyaltyCall extends ethereum.Call {
  get inputs(): DepositRoyaltyCall__Inputs {
    return new DepositRoyaltyCall__Inputs(this);
  }

  get outputs(): DepositRoyaltyCall__Outputs {
    return new DepositRoyaltyCall__Outputs(this);
  }
}

export class DepositRoyaltyCall__Inputs {
  _call: DepositRoyaltyCall;

  constructor(call: DepositRoyaltyCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DepositRoyaltyCall__Outputs {
  _call: DepositRoyaltyCall;

  constructor(call: DepositRoyaltyCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PayoutCall extends ethereum.Call {
  get inputs(): PayoutCall__Inputs {
    return new PayoutCall__Inputs(this);
  }

  get outputs(): PayoutCall__Outputs {
    return new PayoutCall__Outputs(this);
  }
}

export class PayoutCall__Inputs {
  _call: PayoutCall;

  constructor(call: PayoutCall) {
    this._call = call;
  }

  get _payee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PayoutCall__Outputs {
  _call: PayoutCall;

  constructor(call: PayoutCall) {
    this._call = call;
  }
}

export class RemoveCollectionPayeeCall extends ethereum.Call {
  get inputs(): RemoveCollectionPayeeCall__Inputs {
    return new RemoveCollectionPayeeCall__Inputs(this);
  }

  get outputs(): RemoveCollectionPayeeCall__Outputs {
    return new RemoveCollectionPayeeCall__Outputs(this);
  }
}

export class RemoveCollectionPayeeCall__Inputs {
  _call: RemoveCollectionPayeeCall;

  constructor(call: RemoveCollectionPayeeCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _payee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveCollectionPayeeCall__Outputs {
  _call: RemoveCollectionPayeeCall;

  constructor(call: RemoveCollectionPayeeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SweepCall extends ethereum.Call {
  get inputs(): SweepCall__Inputs {
    return new SweepCall__Inputs(this);
  }

  get outputs(): SweepCall__Outputs {
    return new SweepCall__Outputs(this);
  }
}

export class SweepCall__Inputs {
  _call: SweepCall;

  constructor(call: SweepCall) {
    this._call = call;
  }

  get _payee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SweepCall__Outputs {
  _call: SweepCall;

  constructor(call: SweepCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
