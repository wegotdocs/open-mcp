import { z } from "zod"

export const inputParamsSchema = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "version": z.string().describe("The slug identifier for the version of Kubernetes that the cluster will be upgraded to.").optional()
}