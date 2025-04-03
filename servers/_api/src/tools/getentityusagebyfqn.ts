import { z } from "zod"

export const toolName = `getentityusagebyfqn`
export const toolDescription = `Get usage by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/usage/{entity}/name/{fqn}`
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
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entity": z.string().describe("Entity type for which usage is requested"), "fqn": z.string().describe("Fully qualified name of the entity that uniquely identifies an entity"), "days": z.number().int().describe("Usage for number of days going back from the given date (default=1, min=1, max=30)").optional(), "date": z.string().describe("Usage for number of days going back from this date in ISO 8601 format (default = currentDate)").optional() }).shape