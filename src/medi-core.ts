import {
  CommitedMedicalDocument as CommitedMedicalDocumentEvent,
} from "../generated/MediCore/MediCore"
import {
  CommitedMedicalDocument,
} from "../generated/schema"

export function handleCommitedMedicalDocument(
  event: CommitedMedicalDocumentEvent
): void {
  let entity = new CommitedMedicalDocument(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hospital = event.params.hospital
  entity.patient = event.params.patient
  entity.cid = event.params.cid.toHexString()
  entity.fileName = event.params.fileName
  entity.hash = event.params.hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}