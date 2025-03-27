import { z } from "zod"

export const toolName = `oauth_authorizations_update_authorization`
export const toolDescription = `Update an existing authorization`
export const baseUrl = `https://github.com`
export const path = `/authorizations/{authorization_id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "authorization_id": z.number().int().describe("The unique identifier of the authorization.") }).optional(), "body": z.object({ "add_scopes": z.array(z.string()).describe("A list of scopes to add to this authorization.").optional(), "fingerprint": z.string().describe("A unique string to distinguish an authorization from others created for the same client ID and user.").optional(), "note": z.string().describe("A note to remind you what the OAuth token is for.").optional(), "note_url": z.string().describe("A URL to remind you what app the OAuth token is for.").optional(), "remove_scopes": z.array(z.string()).describe("A list of scopes to remove from this authorization.").optional(), "scopes": z.array(z.string()).nullable().describe("A list of scopes that this authorization is in.").optional() }).optional() }).shape