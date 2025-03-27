import { z } from "zod"

export const toolName = `get_orders_status_status_json`
export const toolDescription = `Retrieve orders filtered by status.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/orders/status/{status}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "status": z.enum(["Abandoned","Canceled","Pending Payment","Paid"]).describe("Status of the Order used as filter") }).optional() }).shape