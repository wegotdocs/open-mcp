import { z } from "zod"

export const toolName = `oauth_authorizations_get_grant`
export const toolDescription = `Get a single grant`
export const baseUrl = `https://github.com`
export const path = `/applications/grants/{grant_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "grant_id": z.number().int().describe("The unique identifier of the grant.") }).optional() }).shape