import { z } from "zod"

export const toolName = `getlineagebyfqn`
export const toolDescription = `Get lineage by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/lineage/{entity}/name/{fqn}`
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
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entity": z.string().describe("Entity type for which lineage is requested"), "fqn": z.string().describe("Fully qualified name of the entity that uniquely identifies an entity"), "upstreamDepth": z.number().int().gte(0).lte(3).describe("Upstream depth of lineage (default=1, min=0, max=3)"), "downstreamDepth": z.number().int().gte(0).lte(3).describe("Upstream depth of lineage (default=1, min=0, max=3)") }).shape