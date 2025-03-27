import { z } from "zod"

export const toolName = `oauth_authorizations_get_or_create_authorization_for_app`
export const toolDescription = `Get-or-create an authorization for a specific app`
export const baseUrl = `https://github.com`
export const path = `/authorizations/clients/{client_id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "client_id": z.string().describe("The client ID of the OAuth app.") }).optional(), "body": z.object({ "client_secret": z.string().max(40).describe("The OAuth app client secret for which to create the token."), "fingerprint": z.string().describe("A unique string to distinguish an authorization from others created for the same client ID and user.").optional(), "note": z.string().describe("A note to remind you what the OAuth token is for.").optional(), "note_url": z.string().describe("A URL to remind you what app the OAuth token is for.").optional(), "scopes": z.array(z.string()).nullable().describe("A list of scopes that this authorization is in.").optional() }).optional() }).shape