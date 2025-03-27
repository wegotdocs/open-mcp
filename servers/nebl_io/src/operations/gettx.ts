import { z } from "zod"

export const toolName = `gettx`
export const toolDescription = `Returns transaction object`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ins/tx/{txid}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "txid": z.string().describe("Transaction ID") }).optional() }).shape