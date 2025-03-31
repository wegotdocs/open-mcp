import { z } from "zod"

export const toolName = `register_contract_route_contracts_post`
export const toolDescription = `Register Contract Route`
export const baseUrl = `/metatx`
export const path = `/contracts`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "blockchain": z.string(), "address": z.string(), "title": z.string().optional(), "description": z.string().optional(), "image_uri": z.string().optional() }).optional() }).shape