import { z } from "zod"

export const toolName = `getprojectenv`
export const toolDescription = `Retrieve the decrypted value of an environment variable of a project by id`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/projects/{idOrName}/env/{id}`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "idOrName",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "id": z.string().describe("The unique ID for the environment variable to get the decrypted value."), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape