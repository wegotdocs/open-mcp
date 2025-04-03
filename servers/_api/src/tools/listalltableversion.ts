import { z } from "zod"

export const toolName = `listalltableversion`
export const toolDescription = `List table versions`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().describe("Table Id") }).shape