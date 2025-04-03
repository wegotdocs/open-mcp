import { z } from "zod"

export const toolName = `getreferenceattributecandidates`
export const toolDescription = `Get entities-candidates for reference attribute`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcRelationships/getCandidates`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "attributeKey",
    "entityType",
    "candidateEntityType",
    "glossaryIds",
    "termTypeIds",
    "offset",
    "limit",
    "namePattern"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "attributeKey": z.string().optional(), "entityType": z.string().optional(), "candidateEntityType": z.string().optional(), "glossaryIds": z.array(z.string().uuid()).optional(), "termTypeIds": z.array(z.string().uuid()).optional(), "offset": z.number().int(), "limit": z.number().int(), "namePattern": z.string().optional() }).shape