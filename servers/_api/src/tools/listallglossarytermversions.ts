import { z } from "zod"

export const toolName = `listallglossarytermversions`
export const toolDescription = `List glossary term versions`
export const baseUrl = `/api`
export const path = `/v1/glossaryTerms/{id}/versionsOnly`
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

export const inputParams = z.object({ "id": z.string().describe("glossary term Id") }).shape