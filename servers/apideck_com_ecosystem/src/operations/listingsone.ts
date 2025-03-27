import { z } from "zod"

export const toolName = `listingsone`
export const toolDescription = `Get listing`
export const baseUrl = `https://api.apideck.com`
export const path = `/ecosystems/{ecosystem_id}/listings/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "ecosystem_id": z.string(), "id": z.string().describe("ID of the record you are acting upon.") }).optional() }).shape