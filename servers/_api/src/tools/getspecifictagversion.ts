import { z } from "zod"

export const toolName = `getspecifictagversion`
export const toolDescription = `Get a version of the tags`
export const baseUrl = `/api`
export const path = `/v1/tags/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the tag"), "version": z.string().describe("tag version number in the form `major`.`minor`") }).shape