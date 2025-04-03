import { z } from "zod"

export const toolName = `listalltypeversion`
export const toolDescription = `List type versions`
export const baseUrl = `/api`
export const path = `/v1/metadata/types/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the type") }).shape