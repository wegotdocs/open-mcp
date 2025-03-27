import { z } from "zod"

export const toolName = `gettokenholders`
export const toolDescription = `Get Addresses Holding a Token`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ntp1/stakeholders/{tokenid}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tokenid": z.string().describe("TokenId to request metadata for") }).optional() }).shape