import { z } from "zod"

export const toolName = `registry_list_repositorymanifests`
export const toolDescription = `List All Container Registry Repository Manifests`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/{registry_name}/repositories/{repository_name}/digests`
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
    "page"
  ],
  "header": [],
  "path": [
    "registry_name",
    "repository_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "registry_name": z.string().describe("The name of a container registry."), "repository_name": z.string().describe("The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."), "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.") }).shape