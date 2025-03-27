import { z } from "zod"

export const toolName = `destiny2_gethistoricalstatsdefinition`
export const toolDescription = `Gets historical stats definitions.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Stats/Definition/`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape