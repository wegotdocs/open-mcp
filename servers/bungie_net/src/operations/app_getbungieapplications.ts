import { z } from "zod"

export const toolName = `app_getbungieapplications`
export const toolDescription = `Get list of applications created by Bungie.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/App/FirstParty/`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape