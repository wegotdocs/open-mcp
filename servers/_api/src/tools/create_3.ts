import { z } from "zod"

export const toolName = `create_3`
export const toolDescription = `Import entities from file`
export const baseUrl = `/api`
export const path = `/v1/import`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "entityType",
    "fileName",
    "fileFormat"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.enum(["glossaryTerm","glossary","adcSubjectArea","lineage"]).optional(), "fileName": z.string().optional(), "fileFormat": z.enum(["csv","xlsx"]).optional() }).shape