import { z } from "zod"

export const toolName = `gettokenmetadata`
export const toolDescription = `Get Metadata of Token`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ntp1/tokenmetadata/{tokenid}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tokenid": z.string().describe("TokenId to request metadata for") }).optional(), "query": z.object({ "verbosity": z.number().describe("0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses").optional() }).optional() }).shape