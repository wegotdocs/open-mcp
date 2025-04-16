import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("Send an email to this address"),
  "role": z.enum(["reader","owner"]).describe("`owner` or `reader`"),
  "projects": z.array(z.object({ "id": z.string().describe("Project's public ID"), "role": z.enum(["member","owner"]).describe("Project membership role") })).describe("An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior.").optional()
}