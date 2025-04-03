import { z } from "zod"

export const toolName = `setglobaldefaultglossary`
export const toolDescription = `Set global default glossary`
export const baseUrl = `/api`
export const path = `/v1/glossaries/globalDefaultGlossary/{glossaryId}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "glossaryId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "glossaryId": z.string().describe("Glossary Id") }).shape