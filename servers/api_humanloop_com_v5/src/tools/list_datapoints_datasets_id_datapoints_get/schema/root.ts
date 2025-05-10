import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Dataset."),
  "version_id": z.string().describe("A specific Version ID of the Dataset to retrieve.").optional(),
  "environment": z.string().describe("Name of the Environment to retrieve a deployed Version from.").optional(),
  "page": z.number().int().gte(1).describe("Page number for pagination.").optional(),
  "size": z.number().int().gte(0).describe("Page size for pagination. Number of Datapoints to fetch.").optional()
}