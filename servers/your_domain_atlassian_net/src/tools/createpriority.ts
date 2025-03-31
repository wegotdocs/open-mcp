import { z } from "zod"

export const toolName = `createpriority`
export const toolDescription = `Create priority`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/priority`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "b_avatarId": z.number().int().describe("The ID for the avatar for the priority. Either the iconUrl or avatarId must be defined, but not both. This parameter is nullable and will become mandatory once the iconUrl parameter is deprecated.").optional(), "b_description": z.string().max(255).nullable().describe("The description of the priority.").optional(), "b_iconUrl": z.enum(["/images/icons/priorities/blocker.png","/images/icons/priorities/critical.png","/images/icons/priorities/high.png","/images/icons/priorities/highest.png","/images/icons/priorities/low.png","/images/icons/priorities/lowest.png","/images/icons/priorities/major.png","/images/icons/priorities/medium.png","/images/icons/priorities/minor.png","/images/icons/priorities/trivial.png","/images/icons/priorities/blocker_new.png","/images/icons/priorities/critical_new.png","/images/icons/priorities/high_new.png","/images/icons/priorities/highest_new.png","/images/icons/priorities/low_new.png","/images/icons/priorities/lowest_new.png","/images/icons/priorities/major_new.png","/images/icons/priorities/medium_new.png","/images/icons/priorities/minor_new.png","/images/icons/priorities/trivial_new.png"]).nullable().describe("The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Either the iconUrl or avatarId must be defined, but not both.").optional(), "b_name": z.string().max(60).describe("The name of the priority. Must be unique."), "b_statusColor": z.string().describe("The status color of the priority in 3-digit or 6-digit hexadecimal format.") }).shape