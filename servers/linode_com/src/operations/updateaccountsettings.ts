import { z } from "zod"

export const toolName = `updateaccountsettings`
export const toolDescription = `Account Settings Update`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/settings`
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

export const inputParams = z.object({ "body": z.object({ "backups_enabled": z.boolean().describe("Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.\n").optional(), "longview_subscription": z.string().describe("The Longview Pro tier you are currently subscribed to. The value must be a [Longview Subscription](/docs/api/longview/#longview-subscriptions-list) ID or `null` for Longview Free.\n").readonly().optional(), "managed": z.boolean().describe("Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.\n").readonly().optional(), "network_helper": z.boolean().describe("Enables network helper across all users by default for new Linodes and Linode Configs.\n").optional(), "object_storage": z.enum(["disabled","suspended","active"]).describe("A string describing the status of this account's Object Storage service enrollment.\n").readonly() }).describe("Account Settings object").optional() }).shape