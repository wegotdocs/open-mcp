export { inputParams } from "./schema/root.js"

export const toolName = `filterprojectenvs`
export const toolDescription = `Retrieve the environment variables of a project by id or name`
export const baseUrl = `https://api.vercel.com`
export const path = `/v10/projects/{idOrName}/env`
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
    "gitBranch",
    "decrypt",
    "source",
    "customEnvironmentId",
    "customEnvironmentSlug",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "idOrName"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}