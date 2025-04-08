import { z } from "zod"

export const toolName = `apigee_organizations_environments_keystores_aliases_getcertifica`
export const toolDescription = `Gets the certificate from an alias in PEM-encoded form.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}/certificate`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
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
    "organizationsId",
    "environmentsId",
    "keystoresId",
    "aliasesId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "aliasesId": z.string()
}