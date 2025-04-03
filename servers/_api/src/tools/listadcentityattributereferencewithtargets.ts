import { z } from "zod"

export const toolName = `listadcentityattributereferencewithtargets`
export const toolDescription = `List entity attributes (as entity references) with related usage`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/referenceWithTargets/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target-non-deleted"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "target-non-deleted": z.enum(["all","deleted","non-deleted"]) }).shape