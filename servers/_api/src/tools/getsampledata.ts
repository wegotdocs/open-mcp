import { z } from "zod"

export const toolName = `getsampledata`
export const toolDescription = `Get sample data`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/sampleData`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table") }).shape