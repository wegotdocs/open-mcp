import { z } from "zod"

export const toolName = `groupv2_groupsearch`
export const toolDescription = `Search for Groups.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/Search/`
export const method = `post`
export const security = []

export const inputParams = z.object({}).shape