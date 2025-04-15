import { z } from "zod"

export const inputParams = {
  "longview_subscription": z.enum(["longview-3","longview-10","longview-40","longview-100"]).nullable().describe("The subscription ID for a particular Longview plan. A value of `null` corresponds to Longview Free. You can send a request to the [List Longview subscriptions](https://techdocs.akamai.com/linode-api/reference/get-longview-subscriptions) operation to receive the details of each plan.").optional()
}