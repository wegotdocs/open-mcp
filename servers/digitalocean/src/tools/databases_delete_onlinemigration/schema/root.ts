import { z } from "zod"

export const inputParamsSchema = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "migration_id": z.string().describe("A unique identifier assigned to the online migration.")
}