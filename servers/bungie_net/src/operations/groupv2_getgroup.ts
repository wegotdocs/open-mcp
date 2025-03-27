import { z } from "zod"

export const toolName = `groupv2_getgroup`
export const toolDescription = `Get information about a specific group of the given ID.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/{groupId}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("Requested group's id.") }).optional() }).shape