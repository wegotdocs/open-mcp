import { z } from "zod"

export const toolName = `updateclient`
export const toolDescription = `OAuth Client Update`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/oauth-clients/{clientId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "id": z.string().describe("The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).\n").readonly().optional(), "label": z.string().min(1).max(512).describe("The name of this application.  This will be presented to users when they are asked to grant it access to their Account.\n").optional(), "public": z.boolean().describe("If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target=\"_top\" href=\"https://oauth.net/2/\">OAuth spec</a> for more details.\n"), "redirect_uri": z.string().describe("The location a successful log in from <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.\n").optional(), "secret": z.string().describe("The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.\n").readonly().optional(), "status": z.enum(["active","disabled","suspended"]).describe("The status of this application.  `active` by default.\n").readonly().optional(), "thumbnail_url": z.string().nullable().describe("The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.\n").readonly().optional() }).describe("A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.\n").optional() }).shape