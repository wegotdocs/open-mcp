import { z } from "zod"

export const toolName = `gettokenid`
export const toolDescription = `Returns the tokenId representing a token`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ntp1/tokenid/{tokensymbol}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tokensymbol": z.string().describe("Token symbol") }).optional() }).shape