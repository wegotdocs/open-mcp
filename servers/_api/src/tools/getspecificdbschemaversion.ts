import { z } from "zod"

export const toolName = `getspecificdbschemaversion`
export const toolDescription = `Get a version of the schema`
export const baseUrl = `/api`
export const path = `/v1/databaseSchemas/{id}/versions/{version}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "version"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Database schema Id"), "version": z.string().describe("Database schema version number in the form `major`.`minor`") }).shape