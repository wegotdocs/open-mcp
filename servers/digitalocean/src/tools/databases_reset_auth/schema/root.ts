import { z } from "zod"

export const inputParamsSchema = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "username": z.string().describe("The name of the database user."),
  "mysql_settings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mysql_settings` to the tool, first call the tool `expandSchema` with \"/properties/mysql_settings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}