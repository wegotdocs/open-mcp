import { z } from "zod"

export const toolName = `getspecificdatabaseversion`
export const toolDescription = `Get a version of the database`
export const baseUrl = `/api`
export const path = `/v1/databases/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the database"), "version": z.string().describe("Database version number in the form `major`.`minor`") }).shape