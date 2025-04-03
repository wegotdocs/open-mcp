import { z } from "zod"

export const toolName = `deletedataproduct`
export const toolDescription = `Delete a dataProduct by Id`
export const baseUrl = `/api`
export const path = `/v1/dataProducts/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the dataProduct") }).shape