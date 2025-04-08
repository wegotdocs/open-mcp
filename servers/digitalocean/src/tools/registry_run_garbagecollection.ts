import { z } from "zod"

export const toolName = `registry_run_garbagecollection`
export const toolDescription = `Start Garbage Collection`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/{registry_name}/garbage-collection`
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
  "path": [
    "registry_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "registry_name": z.string().describe("The name of a container registry.")
}