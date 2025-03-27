import { z } from "zod"

export const toolName = `destiny2_getpostgamecarnagereport`
export const toolDescription = `Gets the available post game carnage report for the activity ID.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Stats/PostGameCarnageReport/{activityId}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "activityId": z.number().int().describe("The ID of the activity whose PGCR is requested.") }).optional() }).shape