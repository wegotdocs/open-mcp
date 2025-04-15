import { z } from "zod"

export const inputParamsSchema = {
  "assertionSchema": z.string().describe("Optional. The default schema (BigQuery dataset ID) for assertions.").optional(),
  "databaseSuffix": z.string().describe("Optional. The suffix that should be appended to all database (Google Cloud project ID) names.").optional(),
  "defaultDatabase": z.string().describe("Optional. The default database (Google Cloud project ID).").optional(),
  "defaultLocation": z.string().describe("Optional. The default BigQuery location to use. Defaults to \"US\". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.").optional(),
  "defaultSchema": z.string().describe("Optional. The default schema (BigQuery dataset ID).").optional(),
  "schemaSuffix": z.string().describe("Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.").optional(),
  "tablePrefix": z.string().describe("Optional. The prefix that should be prepended to all table names.").optional(),
  "vars": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `vars` to the tool, first call the tool `expandSchema` with \"/properties/codeCompilationConfig/properties/vars\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional. User-defined variables that are made available to project code during compilation.</property-description>").optional()
}