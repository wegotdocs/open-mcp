import { z } from "zod"

export const toolName = `deletedataproductbyfqn`
export const toolDescription = `Delete a dataProduct by name`
export const baseUrl = `/api`
export const path = `/v1/dataProducts/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the dataProduct") }).shape