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
export const keys = {
  "query": [
    "extended"
  ],
  "header": [],
  "path": [
    "contract_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "contract_id": z.string().uuid(), "extended": z.boolean() }).shape