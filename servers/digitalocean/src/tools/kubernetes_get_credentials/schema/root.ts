import { z } from "zod"

export const inputParamsSchema = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "expiry_seconds": z.number().int().gte(0).describe("The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.").optional()
}