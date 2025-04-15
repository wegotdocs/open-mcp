import { z } from "zod"

export const inputParamsSchema = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "load_balancers": z.array(z.string()).describe("A list of IDs for associated load balancers to destroy along with the cluster.").optional(),
  "volumes": z.array(z.string()).describe("A list of IDs for associated volumes to destroy along with the cluster.").optional(),
  "volume_snapshots": z.array(z.string()).describe("A list of IDs for associated volume snapshots to destroy along with the cluster.").optional()
}