import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CommitedMedicalDocument,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/MediCore/MediCore"

export function createCommitedMedicalDocumentEvent(
  hospital: Address,
  patient: Address,
  cid: string,
  fileName: string,
  hash: BigInt
): CommitedMedicalDocument {
  let commitedMedicalDocumentEvent = changetype<CommitedMedicalDocument>(
    newMockEvent()
  )

  commitedMedicalDocumentEvent.parameters = new Array()

  commitedMedicalDocumentEvent.parameters.push(
    new ethereum.EventParam("hospital", ethereum.Value.fromAddress(hospital))
  )
  commitedMedicalDocumentEvent.parameters.push(
    new ethereum.EventParam("patient", ethereum.Value.fromAddress(patient))
  )
  commitedMedicalDocumentEvent.parameters.push(
    new ethereum.EventParam("cid", ethereum.Value.fromString(cid))
  )
  commitedMedicalDocumentEvent.parameters.push(
    new ethereum.EventParam("fileName", ethereum.Value.fromString(fileName))
  )
  commitedMedicalDocumentEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromUnsignedBigInt(hash))
  )

  return commitedMedicalDocumentEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}
