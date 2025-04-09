import { z } from "zod"

export const inputParams = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "run_id": z.string().uuid().describe("Specifies the clusterlint run whose results will be retrieved.").optional()
}