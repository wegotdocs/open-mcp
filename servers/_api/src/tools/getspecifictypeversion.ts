import { z } from "zod"

export const toolName = `getspecifictypeversion`
export const toolDescription = `Get a version of the types`
export const baseUrl = `/api`
export const path = `/v1/metadata/types/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the type"), "version": z.string().describe("type version number in the form `major`.`minor`") }).shape