import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Dataset."),
  "version_id": z.string().describe("Unique identifier for the specific version of the Dataset.")
}