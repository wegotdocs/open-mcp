import { z } from "zod"

export const toolName = `listalldbschemaversion`
export const toolDescription = `List schema versions`
export const baseUrl = `/api`
export const path = `/v1/databaseSchemas/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Database schema Id") }).shape