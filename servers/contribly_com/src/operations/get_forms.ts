import { z } from "zod"

export const toolName = `get_forms`
export const toolDescription = `List forms`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/forms`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "ownedBy": z.string().describe("Restrict results to forms owned by this user.") }).optional() }).shape