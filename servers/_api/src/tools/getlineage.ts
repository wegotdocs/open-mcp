import { z } from "zod"

export const toolName = `getlineage`
export const toolDescription = `Get lineage by Id`
export const baseUrl = `/api`
export const path = `/v1/lineage/{entity}/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "upstreamDepth",
    "downstreamDepth"
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

export const inputParams = z.object({ "entity": z.string().describe("Entity type for which lineage is requested"), "id": z.string().describe("Id of the entity"), "upstreamDepth": z.number().int().gte(0).lte(3).describe("Upstream depth of lineage (default=1, min=0, max=3)"), "downstreamDepth": z.number().int().gte(0).lte(3).describe("Upstream depth of lineage (default=1, min=0, max=3)") }).shape