import { z } from "zod"

export const toolName = `post_jsapps_json`
export const toolDescription = `Create a Store JSApp.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/jsapps.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "app": z.object({ "element": z.string().describe("Element of Template to inject HTML").optional(), "template": z.string().describe("Template of Store Theme to inject HTML").optional(), "url": z.string().describe("Url of the HTML to inject").optional() }).optional() }).optional() }).shape