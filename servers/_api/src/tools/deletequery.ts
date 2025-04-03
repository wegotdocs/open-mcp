import { z } from "zod"

export const toolName = `deletequery`
export const toolDescription = `Delete a query`
export const baseUrl = `/api`
export const path = `/v1/queries/{id}`
export const method = `delete`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the query") }).shape