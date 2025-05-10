import { z } from "zod"

export const inputParamsSchema = {
  "fullyRefreshIncrementalTablesEnabled": z.boolean().describe("Optional. When set to true, any incremental tables will be fully refreshed.").optional(),
  "includedTags": z.array(z.string()).describe("Optional. The set of tags to include.").optional(),
  "includedTargets": z.array(z.object({ "database": z.string().describe("The action's database (Google Cloud project ID) .").optional(), "name": z.string().describe("The action's name, within `database` and `schema`.").optional(), "schema": z.string().describe("The action's schema (BigQuery dataset ID), within `database`.").optional() }).describe("Represents an action identifier. If the action writes output, the output will be written to the referenced database object.")).describe("Optional. The set of action identifiers to include.").optional(),
  "transitiveDependenciesIncluded": z.boolean().describe("Optional. When set to true, transitive dependencies of included actions will be executed.").optional(),
  "transitiveDependentsIncluded": z.boolean().describe("Optional. When set to true, transitive dependents of included actions will be executed.").optional()
}