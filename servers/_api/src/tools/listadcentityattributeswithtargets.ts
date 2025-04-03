import { z } from "zod"

export const toolName = `listadcentityattributeswithtargets`
export const toolDescription = `List entity attributes with related usage`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/withTargets/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "targetInclude"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "targetInclude": z.enum(["all","deleted","non-deleted"]) }).shape