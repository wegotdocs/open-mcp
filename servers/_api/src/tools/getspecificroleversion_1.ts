import { z } from "zod"

export const toolName = `getspecificroleversion_1`
export const toolDescription = `Get a version of the team`
export const baseUrl = `/api`
export const path = `/v1/teams/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the team"), "version": z.string().describe("Team version number in the form `major`.`minor`") }).shape