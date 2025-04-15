import { z } from "zod"

export const inputParamsSchema = {
  "cluster_uuids": z.array(z.string()).describe("An array containing the UUIDs of Kubernetes clusters.").optional()
}