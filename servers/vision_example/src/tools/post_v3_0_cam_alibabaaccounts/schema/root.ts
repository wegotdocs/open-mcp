import { z } from "zod"

export const inputParamsSchema = {
  "alibabaRegion": z.string().max(254).describe("The region of the Terraform backend where the state files are stored.\n> **Important** > > - The default region is based on your Trend Vision One region.\n"),
  "roleArn": z.string().max(254).describe("The Alibaba Cloud resource name (ARN) of the user role for Trend Vision One."),
  "oidcProviderId": z.string().max(254).describe("The ID of the Alibaba Cloud OpenID Connect (OIDC) provider."),
  "name": z.string().max(254).describe("The name of the Alibaba Cloud account to be used in Cloud Account Management."),
  "description": z.string().max(254).describe("The description of the Alibaba Cloud account.\n").optional(),
  "connectedSecurityServices": z.array(z.object({ "name": z.literal("workload").describe("The name of the security services connected to the system.\n\nAvailable values:\n* `workload` - Server & Workload Protection\n"), "instanceIds": z.array(z.string().max(254)).describe("The instance ID of the associated security service.\n") })).describe("The security service associated with the connected Alibaba Cloud account.\n").optional()
}