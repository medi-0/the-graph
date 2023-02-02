import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CommitedMedicalDocument,
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