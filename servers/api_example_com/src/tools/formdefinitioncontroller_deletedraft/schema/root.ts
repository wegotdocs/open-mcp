import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "userId": z.string().describe("User Id that performed action"),
  "formType": z.enum(["startform","tableform"]).describe("Type of the form").optional()
}