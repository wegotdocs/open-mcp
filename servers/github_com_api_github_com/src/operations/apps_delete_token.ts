import { z } from "zod"

export const toolName = `apps_delete_token`
export const toolDescription = `Delete an app token`
export const baseUrl = `https://api.github.com`
export const path = `/applications/{client_id}/token`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "client_id": z.string().describe("The client ID of the GitHub app.") }).optional(), "body": z.object({ "access_token": z.string().describe("The OAuth access token used to authenticate to the GitHub API.") }).optional() }).shape