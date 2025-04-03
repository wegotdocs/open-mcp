import { z } from "zod"

export const toolName = `deletedataprofiler`
export const toolDescription = `Delete table profile data`
export const baseUrl = `/api`
export const path = `/v1/tables/{fqn}/{entityType}/{timestamp}/profile`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fqn",
    "entityType",
    "timestamp"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("FQN of the table or column"), "entityType": z.string().describe("type of the entity table or column"), "timestamp": z.number().int().describe("Timestamp of the table profile") }).shape