import { z } from "zod"

export const toolName = `groupv2_getavailablethemes`
export const toolDescription = `Returns a list of all available group themes.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/GetAvailableThemes/`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape