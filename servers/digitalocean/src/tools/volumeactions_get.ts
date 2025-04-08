import { z } from "zod"

export const toolName = `volumeactions_get`
export const toolDescription = `Retrieve an Existing Volume Action`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/volumes/{volume_id}/actions/{action_id}`
export const method = `get`
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
  "query": [
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "volume_id",
    "action_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}