import { z } from "zod"

export const toolName = `getaddressinfo`
export const toolDescription = `Information On a Neblio Address`
export const baseUrl = `https://ntp1node.nebl.io`
export const path = `/ntp1/addressinfo/{address}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Neblio Address to get information on.") }).optional() }).shape