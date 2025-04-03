import { z } from "zod"

export const toolName = `listallglossarytermversion`
export const toolDescription = `List glossary term versions`
export const baseUrl = `/api`
export const path = `/v1/glossaryTerms/{id}/lastVersions`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("glossary Id") }).shape