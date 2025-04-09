import { z } from "zod"

export const inputParams = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool."),
  "node_id": z.string().uuid().describe("A unique ID that can be used to reference a node in a Kubernetes node pool."),
  "skip_drain": z.number().int().gte(0).lte(1).describe("Specifies whether or not to drain workloads from a node before it is deleted. Setting it to `1` causes node draining to be skipped. Omitting the query parameter or setting its value to `0` carries out draining prior to deletion.").optional(),
  "replace": z.number().int().gte(0).lte(1).describe("Specifies whether or not to replace a node after it has been deleted. Setting it to `1` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to `0` deletes without replacement.").optional()
}