import { z } from "zod"

export const inputParamsSchema = {
  "organization": z.string().describe("Globally unique identifier for the workspace or organization.").optional()
}