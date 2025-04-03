import { z } from "zod"

export const toolName = `deletequerybyfqn`
export const toolDescription = `Delete a query`
export const baseUrl = `/api`
export const path = `/v1/queries/name/{fqn}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the location") }).shape