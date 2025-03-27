import { z } from "zod"

export const toolName = `getaddressutxos`
export const toolDescription = `Returns all UTXOs at a given address`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ins/addr/{address}/utxo`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape