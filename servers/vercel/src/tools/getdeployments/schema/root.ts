import { z } from "zod"

export const inputParamsSchema = {
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