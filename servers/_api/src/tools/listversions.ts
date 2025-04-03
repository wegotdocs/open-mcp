import { z } from "zod"

export const toolName = `listversions`
export const toolDescription = `List subject area versions`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas/{id}/versions`
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