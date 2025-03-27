import { z } from "zod"

export const toolName = `get_pages_id_json`
export const toolDescription = `Retrieve a single Page by id.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/pages/{id}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Page") }).optional() }).shape