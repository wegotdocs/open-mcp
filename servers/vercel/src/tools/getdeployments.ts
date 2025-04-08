import { z } from "zod"

export const toolName = `getdeployments`
export const toolDescription = `List deployments`
export const baseUrl = `https://api.vercel.com`
export const path = `/v6/deployments`
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
    "app",
    "from",
    "limit",
    "projectId",
    "target",
    "to",
    "users",
    "since",
    "until",
    "state",
    "rollbackCandidate",
    "branch",
    "sha",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "app": z.string().describe("Name of the deployment.").optional(),
  "from": z.number().describe("Gets the deployment created after this Date timestamp. (default: current time)").optional(),
  "limit": z.number().describe("Maximum number of deployments to list from a request.").optional(),
  "projectId": z.string().describe("Filter deployments from the given ID or name.").optional(),
  "target": z.string().describe("Filter deployments based on the environment.").optional(),
  "to": z.number().describe("Gets the deployment created before this Date timestamp. (default: current time)").optional(),
  "users": z.string().describe("Filter out deployments based on users who have created the deployment.").optional(),
  "since": z.number().describe("Get Deployments created after this JavaScript timestamp.").optional(),
  "until": z.number().describe("Get Deployments created before this JavaScript timestamp.").optional(),
  "state": z.string().describe("Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)").optional(),
  "rollbackCandidate": z.boolean().describe("Filter deployments based on their rollback candidacy").optional(),
  "branch": z.string().describe("Filter deployments based on the branch name").optional(),
  "sha": z.string().describe("Filter deployments based on the SHA").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}