import { z } from "zod"

export const toolName = `testnet_getstatus`
export const toolDescription = `Utility API for calling several blockchain node functions`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/testnet/ins/status`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "q": z.string().describe("Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash").optional() }).optional() }).shape