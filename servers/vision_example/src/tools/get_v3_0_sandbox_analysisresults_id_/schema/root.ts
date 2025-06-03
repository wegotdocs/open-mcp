import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(36).describe("Unique alphanumeric string that identifies the analysis results of a submission")
}