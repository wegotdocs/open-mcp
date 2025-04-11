export { inputParams } from "./schema/root.js"

export const toolName = `put_domain`
export const toolDescription = `Update a domain`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/domains/{domainId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
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
  "path": [],
  "cookie": [],
  "body": [
    "axfr_ips",
    "description",
    "domain",
    "expire_sec",
    "id",
    "master_ips",
    "refresh_sec",
    "retry_sec",
    "soa_email",
    "status",
    "tags",
    "ttl_sec",
    "type"
  ]
}
export const flatMap = {}