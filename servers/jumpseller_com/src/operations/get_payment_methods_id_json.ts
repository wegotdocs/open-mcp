import { z } from "zod"

export const toolName = `get_payment_methods_id_json`
export const toolDescription = `Retrieve a single Payment Method.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/payment_methods/{id}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Payment Method") }).optional() }).shape