import { z } from "zod"

export const toolName = `listchangeevents`
export const toolDescription = `Get change events`
export const baseUrl = `/api`
export const path = `/v1/events`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "entityCreated",
    "entityUpdated",
    "entityDeleted",
    "timestamp"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityCreated": z.string().describe("List of comma separated entities requested for `entityCreated` event. When set to `*` all entities will be returned").optional(), "entityUpdated": z.string().describe("List of comma separated entities requested for `entityCreated` event. When set to `*` all entities will be returned").optional(), "entityDeleted": z.string().describe("List of comma separated entities requested for `entityCreated` event. When set to `*` all entities will be returned").optional(), "timestamp": z.number().int().describe("Events starting from this unix timestamp in milliseconds") }).shape