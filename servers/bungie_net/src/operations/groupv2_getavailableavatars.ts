import { z } from "zod"

export const toolName = `groupv2_getavailableavatars`
export const toolDescription = `Returns a list of all available group avatars for the signed-in user.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/GetAvailableAvatars/`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape