import { z } from "zod"

export const toolName = `createlticredentials`
export const toolDescription = `Create a new couple of LTI 1.x credentials`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/organizations/lti/credentials`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "lms": z.enum(["canvas","moodle","schoology","blackboard","desire2learn","sakai","schoolbox","other"]).describe("LMS name"), "name": z.string().max(300).describe("Name of the couple of credentials") }).describe("Creation of a couple of LTI 1.x OAuth credentials").optional() }).shape