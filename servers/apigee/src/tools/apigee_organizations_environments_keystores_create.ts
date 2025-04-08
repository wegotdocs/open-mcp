import { z } from "zod"

export const toolName = `apigee_organizations_environments_keystores_create`
export const toolDescription = `Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores`
export const method = `post`
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
  "query": [
    "name"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "aliases",
    "b_name"
  ]
}
export const flatMap = {
  "b_name": "name"
}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "name": z.string().optional(),
  "aliases": z.array(z.string()).describe("Output only. Aliases in this keystore.").readonly().optional(),
  "b_name": z.string().describe("Required. Resource ID for this keystore. Values must match the regular expression `[\\w[:space:].-]{1,255}`.").optional()
}