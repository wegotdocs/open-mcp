import { z } from "zod"

export const toolName = `update_contract_route_contracts_contract_id_put`
export const toolDescription = `Update Contract Route`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "contract_id"
  ],
  "cookie": [],
  "body": [
    "title",
    "description",
    "image_uri",
    "ignore_nulls"
  ]
}
export const flatMap = {}

export const inputParams = {
  "contract_id": z.string().uuid(),
  "title": z.string().optional(),
  "description": z.string().optional(),
  "image_uri": z.string().optional(),
  "ignore_nulls": z.boolean().optional()
}