import { z } from "zod"

export const inputParams = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "since": z.string().datetime({ offset: true }).describe("A timestamp used to return status messages emitted since the specified time. The timestamp should be in ISO8601 format.").optional()
}