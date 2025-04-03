import { z } from "zod"

export const toolName = `patchtable`
export const toolDescription = `Update a table`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}`
export const method = `patch`
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