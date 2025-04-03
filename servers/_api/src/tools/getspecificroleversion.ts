import { z } from "zod"

export const toolName = `getspecificroleversion`
export const toolDescription = `Get a version of the role`
export const baseUrl = `/api`
export const path = `/v1/roles/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the role"), "version": z.string().describe("Role version number in the form `major`.`minor`") }).shape