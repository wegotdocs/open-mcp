import { z } from "zod"

export const toolName = `patchdbschema`
export const toolDescription = `Update a database schema`
export const baseUrl = `/api`
export const path = `/v1/databaseSchemas/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Database schema Id") }).shape