import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CommitedMedicalDocument } from "../generated/schema"
import { CommitedMedicalDocument as CommitedMedicalDocumentEvent } from "../generated/MediCore/MediCore"
import { handleCommitedMedicalDocument } from "../src/medi-core"
import { createCommitedMedicalDocumentEvent } from "./medi-core-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let hospital = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let patient = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let cid = "Example string value"
    let fileName = "Example string value"
    let hash = BigInt.fromI32(234)
    let newCommitedMedicalDocumentEvent = createCommitedMedicalDocumentEvent(
      hospital,
      patient,
      cid,
      fileName,
      hash
    )
    handleCommitedMedicalDocument(newCommitedMedicalDocumentEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CommitedMedicalDocument created and stored", () => {
    assert.entityCount("CommitedMedicalDocument", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CommitedMedicalDocument",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hospital",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CommitedMedicalDocument",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "patient",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CommitedMedicalDocument",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cid",
      "Example string value"
    )
    assert.fieldEquals(
      "CommitedMedicalDocument",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fileName",
      "Example string value"
    )
    assert.fieldEquals(
      "CommitedMedicalDocument",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hash",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
