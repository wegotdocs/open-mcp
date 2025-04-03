import { z } from "zod"

export const toolName = `deletelineageedge`
export const toolDescription = `Delete a lineage edge`
export const baseUrl = `/api`
export const path = `/v1/lineage/{fromEntity}/{fromId}/{toEntity}/{toId}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fromEntity",
    "fromId",
    "toEntity",
    "toId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fromEntity": z.string().describe("Entity type of upstream entity of the edge"), "fromId": z.string().describe("Entity id"), "toEntity": z.string().describe("Entity type for downstream entity of the edge"), "toId": z.string().describe("Entity id") }).shape