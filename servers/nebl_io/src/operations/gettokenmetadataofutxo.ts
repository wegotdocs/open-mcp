import { z } from "zod"

export const toolName = `gettokenmetadataofutxo`
export const toolDescription = `Get UTXO Metadata of Token`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ntp1/tokenmetadata/{tokenid}/{utxo}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tokenid": z.string().describe("TokenId to request metadata for"), "utxo": z.string().describe("Specific UTXO to request metadata for") }).optional(), "query": z.object({ "verbosity": z.number().describe("0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses").optional() }).optional() }).shape