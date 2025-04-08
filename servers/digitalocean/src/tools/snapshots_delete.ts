import { z } from "zod"

export const toolName = `snapshots_delete`
export const toolDescription = `Delete a Snapshot`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/snapshots/{snapshot_id}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "snapshot_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "snapshot_id": z.union([z.number().int().describe("The ID of a Droplet snapshot."), z.string().describe("The ID of a volume snapshot.")]).describe("Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.")
}