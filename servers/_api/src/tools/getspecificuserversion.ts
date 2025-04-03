import { z } from "zod"

export const toolName = `getspecificuserversion`
export const toolDescription = `Get a version of the user`
export const baseUrl = `/api`
export const path = `/v1/users/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the user"), "version": z.string().describe("User version number in the form `major`.`minor`") }).shape