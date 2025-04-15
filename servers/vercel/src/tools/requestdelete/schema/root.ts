import { z } from "zod"

export const inputParamsSchema = {
  "reasons": z.array(z.object({ "slug": z.string().describe("Idenitifier slug of the reason why the User account is being deleted."), "description": z.string().describe("Description of the reason why the User account is being deleted.") }).strict().describe("An object describing the reason why the User account is being deleted.")).describe("Optional array of objects that describe the reason why the User account is being deleted.").optional()
}