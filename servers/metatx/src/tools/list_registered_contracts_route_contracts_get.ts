import { z } from "zod"

export const toolName = `list_registered_contracts_route_contracts_get`
export const toolDescription = `List Registered Contracts Route`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
export const path = `/contracts`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "blockchain",
    "address",
    "limit",
    "offset"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "blockchain": z.string().optional(),
  "address": z.string().optional(),
  "limit": z.number().int().optional(),
  "offset": z.number().int().optional()
}