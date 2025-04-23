import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Dataset."),
  "path": z.string().describe("Path of the Dataset including the Dataset name, which is used as a unique identifier.").optional(),
  "name": z.string().describe("Name of the Dataset, which is used as a unique identifier.").optional()
}