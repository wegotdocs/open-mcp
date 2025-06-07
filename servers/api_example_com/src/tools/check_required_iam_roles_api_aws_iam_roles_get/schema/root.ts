import { z } from "zod"

export const inputParamsSchema = {
  "required_roles": z.string().describe("Comma-separated list of required IAM roles to check").optional()
}