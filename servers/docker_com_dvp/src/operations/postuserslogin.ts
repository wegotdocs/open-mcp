import { z } from "zod"

export const toolName = `postuserslogin`
export const toolDescription = `Create an authentication token`
export const baseUrl = `https://hub.docker.com/api/publisher/analytics/v1`
export const path = `/v2/users/login`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "password": z.string().describe("The password or personal access token (PAT) of the Docker Hub account to authenticate with."), "username": z.string().describe("The username of the Docker Hub account to authenticate with.") }).describe("User login details").optional() }).shape