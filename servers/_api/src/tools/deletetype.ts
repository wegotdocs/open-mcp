import { z } from "zod"

export const toolName = `deletetype`
export const toolDescription = `Delete a type by id`
export const baseUrl = `/api`
export const path = `/v1/metadata/types/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the type") }).shape