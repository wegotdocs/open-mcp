import { z } from "zod"

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

export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "gitBranch": z.string().max(250).describe("If defined, the git branch of the environment variable to filter the results (must have target=preview)").optional(), "decrypt": z.enum(["true","false"]).describe("If true, the environment variable value will be decrypted").optional(), "source": z.string().describe("The source that is calling the endpoint.").optional(), "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(), "customEnvironmentSlug": z.string().describe("The custom environment slug (name) within the project").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape