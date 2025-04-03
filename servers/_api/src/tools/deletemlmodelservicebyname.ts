import { z } from "zod"

export const toolName = `deletemlmodelservicebyname`
export const toolDescription = `Delete an ML model service by name`
export const baseUrl = `/api`
export const path = `/v1/services/mlmodelServices/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the ML Model service"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape