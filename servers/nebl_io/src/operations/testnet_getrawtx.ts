import { z } from "zod"

export const toolName = `testnet_getrawtx`
export const toolDescription = `Returns raw transaction hex`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/testnet/ins/rawtx/{txid}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "txid": z.string().describe("Transaction ID") }).optional() }).shape