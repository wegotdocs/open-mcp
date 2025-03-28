import { z } from "zod"

export const toolName = `update_contract_route_contracts_contract_id_put`
export const toolDescription = `Update Contract Route`
export const baseUrl = `/metatx`
export const path = `/contracts/{contract_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "contract_id": z.string().uuid() }).optional(), "body": z.object({ "title": z.string().optional(), "description": z.string().optional(), "image_uri": z.string().optional(), "ignore_nulls": z.boolean() }).optional() }).shape