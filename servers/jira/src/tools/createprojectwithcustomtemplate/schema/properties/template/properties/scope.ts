import { z } from "zod"

export const inputParams = {
  "type": z.enum(["GLOBAL","PROJECT"]).describe("The type of the scope. Use `GLOBAL` or empty for company-managed project, and `PROJECT` for team-managed project").optional()
}