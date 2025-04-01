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

export const inputParams = z.object({ "b_blockchain": z.string(), "b_address": z.string(), "b_title": z.string().optional(), "b_description": z.string().optional(), "b_image_uri": z.string().optional() }).shape