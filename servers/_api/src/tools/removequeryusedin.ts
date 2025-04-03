import { z } from "zod"

export const toolName = `removequeryusedin`
export const toolDescription = `remove query used in`
export const baseUrl = `/api`
export const path = `/v1/queries/{id}/usage`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the query") }).shape