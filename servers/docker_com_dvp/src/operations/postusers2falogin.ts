import { z } from "zod"

export const toolName = `postusers2falogin`
export const toolDescription = `Second factor authentication.`
export const baseUrl = `https://hub.docker.com/api/publisher/analytics/v1`
export const path = `/v2/users/2fa-login`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "code": z.string().describe("The Time-based One-Time Password of the Docker Hub account to authenticate with."), "login_2fa_token": z.string().describe("The intermediate 2FA token returned from `/v2/users/login` API.") }).describe("Second factor user login details").optional() }).shape