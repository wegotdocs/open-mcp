import { z } from "zod"

export const toolName = `_getavailablelocales`
export const toolDescription = `List of available localization cultures`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GetAvailableLocales/`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape