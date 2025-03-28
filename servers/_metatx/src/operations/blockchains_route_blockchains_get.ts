import { z } from "zod"

export const toolName = `blockchains_route_blockchains_get`
export const toolDescription = `Blockchains Route`
export const baseUrl = `/metatx`
export const path = `/blockchains`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape