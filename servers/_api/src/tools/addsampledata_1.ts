import { z } from "zod"

export const toolName = `addsampledata_1`
export const toolDescription = `Add sample data`
export const baseUrl = `/api`
export const path = `/v1/topics/{id}/sampleData`
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
    "messages"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the topic"), "messages": z.array(z.string()).optional() }).shape