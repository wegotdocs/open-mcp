import { z } from "zod"

export const inputParamsSchema = {
  "environment": z.string().describe("Name of the Environment to retrieve a deployed Version from.").optional(),
  "path": z.string().describe("Path of the File to retrieve.")
}