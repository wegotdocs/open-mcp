import { z } from "zod"

export const toolName = `listadcentityattributereferenceswithtargets`
export const toolDescription = `List entity attributes (as entity references) with related usage`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/referenceWithTargets`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "dataTypes",
    "ilikeQuery",
    "non-deleted",
    "target-non-deleted"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "dataTypes": z.string(), "ilikeQuery": z.string(), "non-deleted": z.enum(["all","deleted","non-deleted"]), "target-non-deleted": z.enum(["all","deleted","non-deleted"]) }).shape