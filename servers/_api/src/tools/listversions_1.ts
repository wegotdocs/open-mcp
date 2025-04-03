import { z } from "zod"

export const toolName = `listversions_1`
export const toolDescription = `List glossary term type versions`
export const baseUrl = `/api`
export const path = `/v1/adcGlossaryTermTypes/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().describe("glossary term type Id") }).shape