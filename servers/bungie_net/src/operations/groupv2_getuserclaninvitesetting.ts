import { z } from "zod"

export const toolName = `groupv2_getuserclaninvitesetting`
export const toolDescription = `Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/GetUserClanInviteSetting/{mType}/`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "mType": z.number().int().describe("The Destiny membership type of the account we wish to access settings.") }).optional() }).shape