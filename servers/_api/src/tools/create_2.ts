import { z } from "zod"

export const toolName = `create_2`
export const toolDescription = `Change entities from jsonPatch map`
export const baseUrl = `/api`
export const path = `/v1/groupOperations/change`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "entityType",
    "publish"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.enum(["glossaryTerm","glossary","adcSubjectArea","lineage"]).optional(), "publish": z.boolean().optional() }).shape