import { z } from "zod"

export const inputParamsSchema = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "version": z.string().describe("A string representing the version of the database engine in use for the cluster.").optional()
}