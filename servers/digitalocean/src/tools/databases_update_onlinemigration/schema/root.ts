import { z } from "zod"

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "source": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `source` to the tool, first call the tool `expandSchema` with \"/properties/source\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "disable_ssl": z.boolean().describe("Enables SSL encryption when connecting to the source database.").optional(),
  "ignore_dbs": z.array(z.string()).describe("List of databases that should be ignored during migration.").optional()
}