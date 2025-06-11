import { z } from "zod"

export const inputParamsSchema = {
  "userType": z.enum(["TECHNICIAN","END_USER"]).describe("User type filter").optional(),
  "includeRoles": z.boolean().describe("Includes user role information").optional()
}