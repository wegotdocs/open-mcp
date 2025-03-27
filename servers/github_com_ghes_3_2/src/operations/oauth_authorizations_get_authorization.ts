import { z } from "zod"

export const toolName = `oauth_authorizations_get_authorization`
export const toolDescription = `Get a single authorization`
export const baseUrl = `https://github.com`
export const path = `/authorizations/{authorization_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "authorization_id": z.number().int().describe("The unique identifier of the authorization.") }).optional() }).shape