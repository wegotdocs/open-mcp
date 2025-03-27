import { z } from "zod"

export const toolName = `destiny2_getclanweeklyrewardstate`
export const toolDescription = `Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Clan/{groupId}/WeeklyRewardState/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("A valid group id of clan.") }).optional() }).shape