import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().max(128).describe("The description of the cluster").optional(),
  "policyId": z.string().max(128).describe("The ID of the policy associated with the cluster").optional(),
  "vulnerabilityScanEnabled": z.boolean().describe("If true, enables vulnerability scan for the cluster.").optional(),
  "runtimeSecurityEnabled": z.boolean().describe("If true, enables runtime security for the cluster.").optional(),
  "customizableTagIds": z.array(z.string()).describe("The custom tags and platform tags associated with the cluster. To obtain custom tags, refer to the following URL: https://automation.trendmicro.com/xdr/api-v3/#tag/Attack-Surface-Discovery/paths/~1v3.0~1asrm~1attackSurfaceCustomTags/get. However, platform tags will be provided through an additional API in the future. The difference between custom tags and platform tags is that properties of platform tags are defined by Trend Micro, while properties and values of custom tags can be created and updated by users.\n").optional()
}