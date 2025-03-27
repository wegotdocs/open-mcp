import { z } from "zod"

export const toolName = `groupv2_getadminsandfounderofgroup`
export const toolDescription = `Get the list of members in a given group who are of admin level or higher.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/{groupId}/AdminsAndFounder/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "currentpage": z.number().int().describe("Page number (starting with 1). Each page has a fixed size of 50 items per page.") }).optional(), "path": z.object({ "groupId": z.number().int().describe("The ID of the group.") }).optional() }).shape