import { z } from "zod"

export const inputParamsSchema = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "logsink_id": z.string().describe("A unique identifier for a logsink of a database cluster")
}