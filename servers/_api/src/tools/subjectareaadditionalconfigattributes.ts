import { z } from "zod"

export const toolName = `subjectareaadditionalconfigattributes`
export const toolDescription = `List User/Group attributes for subject area`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/subjectAreaAdditionalConfigAttributes`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "glossaryId",
    "subjectAreaId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "glossaryId": z.array(z.string().uuid()).optional(), "subjectAreaId": z.array(z.string().uuid()).optional() }).shape