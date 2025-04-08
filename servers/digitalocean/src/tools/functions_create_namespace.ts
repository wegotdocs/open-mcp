import { z } from "zod"

export const toolName = `functions_create_namespace`
export const toolDescription = `Create Namespace`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/functions/namespaces`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "region",
    "label"
  ]
}
export const flatMap = {}

export const inputParams = {
  "region": z.string().describe("The [datacenter region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) in which to create the namespace."),
  "label": z.string().describe("The namespace's unique name.")
}