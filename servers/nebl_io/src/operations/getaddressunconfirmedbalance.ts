import { z } from "zod"

export const toolName = `getaddressunconfirmedbalance`
export const toolDescription = `Returns address unconfirmed balance in sats`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ins/addr/{address}/unconfirmedBalance`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape