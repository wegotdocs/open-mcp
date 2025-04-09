import { z } from "zod"

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "sql_mode": z.string().describe("A string specifying the configured SQL modes for the MySQL cluster.")
}