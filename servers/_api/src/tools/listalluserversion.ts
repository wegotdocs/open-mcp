import { z } from "zod"

export const toolName = `listalluserversion`
export const toolDescription = `List user versions`
export const baseUrl = `/api`
export const path = `/v1/users/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the user") }).shape