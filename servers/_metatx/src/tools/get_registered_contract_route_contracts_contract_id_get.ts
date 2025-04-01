import { z } from "zod"

export const toolName = `get_registered_contract_route_contracts_contract_id_get`
export const toolDescription = `Get Registered Contract Route`
export const baseUrl = `/metatx`
export const path = `/contracts/{contract_id}`
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

export const inputParams = z.object({ "p_contract_id": z.string().uuid() }).shape