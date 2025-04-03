import { z } from "zod"

export const toolName = `getstarterfile`
export const toolDescription = `Get starter file for specified format`
export const baseUrl = `/api`
export const path = `/v1/import/starterFile`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "entityType",
    "fileFormat",
    "subjectAreaIds",
    "termTypeIds"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.enum(["glossaryTerm","glossary","adcSubjectArea","lineage"]).optional(), "fileFormat": z.enum(["csv","xlsx"]).optional(), "subjectAreaIds": z.array(z.string().uuid()).optional(), "termTypeIds": z.array(z.string().uuid()).optional() }).shape