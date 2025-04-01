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

export const inputParams = z.object({ "p_contract_id": z.string().uuid(), "b_title": z.string().optional(), "b_description": z.string().optional(), "b_image_uri": z.string().optional(), "b_ignore_nulls": z.boolean() }).shape