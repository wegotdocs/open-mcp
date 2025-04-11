import { z } from "zod"

export const inputParams = {
  "backups_enabled": z.boolean().describe("Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.").optional(),
  "longview_subscription": z.string().describe("__Read-only__ The Longview Pro tier you are currently subscribed to. The value must be a [Longview subscription](https://techdocs.akamai.com/linode-api/reference/get-longview-subscriptions) ID or `null` for Longview Free.").readonly().optional(),
  "managed": z.boolean().describe("__Read-only__ Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.").readonly().optional(),
  "network_helper": z.boolean().describe("Enables network helper across all users by default for new Linodes and Linode Configs.").optional(),
  "object_storage": z.enum(["disabled","suspended","active"]).describe("__Read-only__ A string describing the status of this account's Object Storage service enrollment.").readonly().optional()
}