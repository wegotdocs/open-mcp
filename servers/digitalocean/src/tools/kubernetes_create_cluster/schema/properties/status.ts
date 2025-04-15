import { z } from "zod"

export const inputParamsSchema = {
  "state": z.enum(["running","provisioning","degraded","error","deleted","upgrading","deleting"]).describe("A string indicating the current status of the cluster.").optional(),
  "message": z.string().describe("An optional message providing additional information about the current cluster state.").optional()
}