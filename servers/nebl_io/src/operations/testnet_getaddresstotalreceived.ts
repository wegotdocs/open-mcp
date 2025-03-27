import { z } from "zod"

export const toolName = `testnet_getaddresstotalreceived`
export const toolDescription = `Returns total received by address in sats`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/testnet/ins/addr/{address}/totalReceived`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape