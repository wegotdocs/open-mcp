import { z } from "zod"

export const toolName = `getentityusagebyid`
export const toolDescription = `Get usage by id`
export const baseUrl = `/api`
export const path = `/v1/usage/{entity}/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "days",
    "date"
  ],
  "header": [],
  "path": [
    "entity",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entity": z.string().describe("Entity type for which usage is requested"), "id": z.string().describe("Entity id"), "days": z.number().int().describe("Usage for number of days going back from the given date (default=1, min=1, max=30)").optional(), "date": z.string().describe("Usage for number of days going back from this date in ISO 8601 format. (default = currentDate)").optional() }).shape