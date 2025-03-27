import { z } from "zod"

export const toolName = `list_metatx_requester_holders_route_contracts_contract_id_holder`
export const toolDescription = `List Metatx Requester Holders Route`
export const baseUrl = `/metatx`
export const path = `/contracts/{contract_id}/holders`
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

export const inputParams = z.object({ "path": z.object({ "contract_id": z.string().uuid() }).optional(), "query": z.object({ "extended": z.boolean() }).optional() }).shape