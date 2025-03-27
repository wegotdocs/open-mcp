import { z } from "zod"

export const toolName = `groupv2_getgroupbyname`
export const toolDescription = `Get information about a specific group with the given name and type.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/Name/{groupName}/{groupType}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "groupName": z.string().describe("Exact name of the group to find."), "groupType": z.number().int().describe("Type of group to find.") }).optional() }).shape