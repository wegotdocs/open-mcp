import { z } from "zod"

export const toolName = `apps_reset_token`
export const toolDescription = `Reset a token`
export const baseUrl = `https://api.github.com`
export const path = `/applications/{client_id}/token`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "client_id": z.string().describe("The client ID of the GitHub app.") }).optional(), "body": z.object({ "access_token": z.string().describe("The access_token of the OAuth application.") }).optional() }).shape