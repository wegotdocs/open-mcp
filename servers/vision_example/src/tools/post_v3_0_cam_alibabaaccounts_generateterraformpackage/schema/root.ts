import { z } from "zod"

export const inputParamsSchema = {
  "cloudAccountName": z.string().max(254).describe("The name of the Alibaba Cloud account.\n\nUse this value as the 'name' field in the 'POST /v3.0/cam/alibabaAccounts' API.\n"),
  "cloudAccountDescription": z.string().max(254).describe("The description of the Alibaba Cloud account.\n\nUse this value as the 'description' field in the 'POST /v3.0/cam/alibabaAccounts' API.\n").optional(),
  "alibabaRegion": z.string().max(254).describe("The region of Terraform backend where the state files are stored.\n\n> **Important** > > The default region is based on your Trend Vision One region.\n"),
  "connectedSecurityServices": z.array(z.object({ "name": z.literal("workload").describe("The name of the security services connected to the system.\n\nAvailable values:\n* `workload` - Server & Workload Protection\n"), "instanceIds": z.array(z.string().max(254)).describe("The instance ID of the associated security service.\n") })).describe("The security service associated with the connected Alibaba Cloud account.\n").optional()
}