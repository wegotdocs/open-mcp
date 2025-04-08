import { z } from "zod"

export const toolName = `volumesnapshots_create`
export const toolDescription = `Create Snapshot from a Volume`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/volumes/{volume_id}/snapshots`
export const method = `post`
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
    "volume_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "tags"
  ]
}
export const flatMap = {}

export const inputParams = {
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "name": z.string().describe("A human-readable name for the volume snapshot.").optional(),
  "tags": z.array(z.string()).nullable().describe("A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags.").optional()
}