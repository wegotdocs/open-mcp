import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Tool."),
  "version_id": z.string().describe("A specific Version ID of the Tool to retrieve.").optional(),
  "environment": z.string().describe("Name of the Environment to retrieve a deployed Version from.").optional()
}