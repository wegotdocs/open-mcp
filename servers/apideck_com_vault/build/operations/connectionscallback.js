import { z } from "zod";
export const toolName = `connectionscallback`;
export const toolDescription = `Callback`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/vault/callback`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "state": z.string().describe("An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks."), "code": z.string().describe("An authorization code from the connector which Apideck Vault will later exchange for an access token.") }).optional() }).shape;
