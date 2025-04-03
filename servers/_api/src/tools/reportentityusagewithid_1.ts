import { z } from "zod"

export const toolName = `reportentityusagewithid_1`
export const toolDescription = `Report usage`
export const baseUrl = `/api`
export const path = `/v1/usage/{entity}/{id}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "entity",
    "id"
  ],
  "cookie": [],
  "body": [
    "count",
    "date"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "entity": z.string().describe("Entity type for which usage is reported"), "id": z.string().describe("Entity id"), "count": z.number().int(), "date": z.string() }).shape