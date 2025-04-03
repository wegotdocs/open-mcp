import { z } from "zod"

export const toolName = `reportentityusagewithfqn`
export const toolDescription = `Report usage by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/usage/{entity}/name/{fqn}`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "entity",
    "fqn"
  ],
  "cookie": [],
  "body": [
    "count",
    "date"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "entity": z.string().describe("Entity type for which usage is reported"), "fqn": z.string().describe("Fully qualified name of the entity that uniquely identifies an entity"), "count": z.number().int(), "date": z.string() }).shape