import { z } from "zod"

export const toolName = `connectionsrevoke`
export const toolDescription = `Revoke connection`
export const baseUrl = `https://unify.apideck.com`
export const path = `/vault/revoke/{service_id}/{application_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "service_id": z.string().describe("Service ID of the resource to return"), "application_id": z.string().describe("Application ID of the resource to return") }).optional(), "query": z.object({ "state": z.string().describe("An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks."), "redirect_uri": z.string().describe("URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.") }).optional() }).shape