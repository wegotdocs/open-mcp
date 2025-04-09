import { z } from "zod"

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "size": z.string().describe("A slug identifier representing desired the size of the nodes in the database cluster."),
  "num_nodes": z.number().int().describe("The number of nodes in the database cluster. Valid values are are 1-3. In addition to the primary node, up to two standby nodes may be added for highly available configurations."),
  "storage_size_mib": z.number().int().describe("Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.").optional()
}