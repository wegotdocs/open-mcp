import { z } from "zod"

export const toolName = `get_custom_fields_json`
export const toolDescription = `Retrieve all Store's Custom Fields.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/custom_fields.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional() }).shape