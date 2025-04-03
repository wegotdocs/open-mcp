import { z } from "zod"

export const toolName = `deletedomain`
export const toolDescription = `Delete a domain by Id`
export const baseUrl = `/api`
export const path = `/v1/domains/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the domain") }).shape