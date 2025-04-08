import { z } from "zod"

export const toolName = `listlabels`
export const toolDescription = `List labels`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/labels`
export const method = `get`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  }
]
export const keys = {
  "query": [
    "organisation_id",
    "workspace_id",
    "search",
    "current_page",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organisation_id": z.string().uuid().describe("ID of the organisation").optional(),
  "workspace_id": z.string().describe("ID or slug of the workspace").optional(),
  "search": z.string().describe("Search query to filter labels by name").optional(),
  "current_page": z.number().int().gte(0).describe("Page number for pagination").optional(),
  "page_size": z.number().int().gte(1).describe("Number of items per page").optional()
}