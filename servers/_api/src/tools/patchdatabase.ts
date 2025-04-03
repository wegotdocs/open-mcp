import { z } from "zod"

export const toolName = `patchdatabase`
export const toolDescription = `Update a database`
export const baseUrl = `/api`
export const path = `/v1/databases/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the database") }).shape