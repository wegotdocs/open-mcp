import { z } from "zod"

export const inputParams = {
  "kubeconfig": z.boolean().describe("Whether to delete and regenerate the Kubeconfig file for this Cluster.").optional(),
  "servicetoken": z.boolean().describe("Whether to delete and regenerate the service access token for this Cluster.").optional()
}