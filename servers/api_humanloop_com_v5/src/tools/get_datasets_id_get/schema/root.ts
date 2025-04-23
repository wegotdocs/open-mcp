import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Dataset."),
  "version_id": z.string().describe("A specific Version ID of the Dataset to retrieve.").optional(),
  "environment": z.string().describe("Name of the Environment to retrieve a deployed Version from.").optional(),
  "include_datapoints": z.boolean().describe("If set to `true`, include all Datapoints in the response. Defaults to `false`. Consider using the paginated List Datapoints endpoint instead.").optional()
}