import { z } from "zod"

export const inputParamsSchema = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "sql_mode": z.string().describe("A string specifying the configured SQL modes for the MySQL cluster.")
}