import { z } from "zod"

export const toolName = `listalldatabaseversion`
export const toolDescription = `List database versions`
export const baseUrl = `/api`
export const path = `/v1/databases/{id}/versions`
export const method = `get`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the database") }).shape