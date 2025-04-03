import { z } from "zod"

export const toolName = `addsampledata`
export const toolDescription = `Add sample data`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/sampleData`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "columns",
    "rows"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table"), "columns": z.array(z.string()).optional(), "rows": z.array(z.array(z.record(z.any()))).optional() }).shape