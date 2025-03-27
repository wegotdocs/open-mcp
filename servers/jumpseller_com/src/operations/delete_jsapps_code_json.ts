import { z } from "zod"

export const toolName = `delete_jsapps_code_json`
export const toolDescription = `Delete an existing JSApp.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/jsapps/{code}.json`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "code": z.string().describe("Code of the App") }).optional() }).shape