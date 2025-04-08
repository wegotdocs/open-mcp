import { z } from "zod"

export const toolName = `registry_list_repositoriesv2`
export const toolDescription = `List All Container Registry Repositories (V2)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/{registry_name}/repositoriesV2`
export const method = `get`
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
  "query": [
    "per_page",
    "page",
    "page_token"
  ],
  "header": [],
  "path": [
    "registry_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "registry_name": z.string().describe("The name of a container registry."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return. Ignored when 'page_token' is provided.").optional(),
  "page_token": z.string().describe("Token to retrieve of the next or previous set of results more quickly than using 'page'.").optional()
}