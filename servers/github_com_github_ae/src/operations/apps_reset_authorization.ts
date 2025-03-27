import { z } from "zod"

export const toolName = `apps_reset_authorization`
export const toolDescription = `Reset an authorization`
export const baseUrl = `https://github.com`
export const path = `/applications/{client_id}/tokens/{access_token}`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "client_id": z.string().describe("The client ID of the GitHub app."), "access_token": z.string() }).optional() }).shape