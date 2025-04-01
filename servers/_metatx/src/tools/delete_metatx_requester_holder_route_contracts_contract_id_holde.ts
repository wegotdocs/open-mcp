import { z } from "zod"

export const toolName = `delete_metatx_requester_holder_route_contracts_contract_id_holde`
export const toolDescription = `Delete Metatx Requester Holder Route`
export const baseUrl = `/metatx`
export const path = `/contracts/{contract_id}/holders`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "p_contract_id": z.string().uuid(), "b_holder_id": z.string().uuid(), "b_holder_type": z.enum(["user","group"]).describe("An enumeration."), "b_permissions": z.array(z.enum(["admin","create","read","update","delete"]).describe("An enumeration.")).optional() }).shape