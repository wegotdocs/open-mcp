import { z } from "zod"

export const inputParamsSchema = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "region": z.string().describe("A slug identifier for the region to which the database cluster will be migrated.")
}