import { z } from "zod";
export const toolName = `oauth_authorizations_create_authorization`;
export const toolDescription = `Create a new authorization`;
export const baseUrl = `https://github.com`;
export const path = `/authorizations`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "client_id": z.string().max(20).describe("The OAuth app client key for which to create the token.").optional(), "client_secret": z.string().max(40).describe("The OAuth app client secret for which to create the token.").optional(), "fingerprint": z.string().describe("A unique string to distinguish an authorization from others created for the same client ID and user.").optional(), "note": z.string().describe("A note to remind you what the OAuth token is for.").optional(), "note_url": z.string().describe("A URL to remind you what app the OAuth token is for.").optional(), "scopes": z.array(z.string()).nullable().describe("A list of scopes that this authorization is in.").optional() }).optional() }).shape;
