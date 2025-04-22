import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update scaling parameters."),
  "numReplicas": z.number().gte(1).lte(20).describe("Number of replicas for the service. The number of replicas must be between 2 and 20 for the first service in a warehouse. Services that are created in an existing warehouse can have a number of replicas as low as 1. Further restrictions may apply based on your organization's tier. It defaults to 1 for the BASIC tier and 3 for the SCALE and ENTERPRISE tiers.").optional(),
  "idleScaling": z.boolean().describe("When set to true the service is allowed to scale down to zero when idle. True by default.").optional(),
  "idleTimeoutMinutes": z.number().describe("Set minimum idling timeout (in minutes). Must be >= 5 minutes.").optional()
}