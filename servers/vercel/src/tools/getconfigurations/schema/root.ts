import { z } from "zod"

export const inputParamsSchema = {
  "view": z.enum(["account","project"]),
  "installationType": z.enum(["marketplace","external"]).optional(),
  "integrationIdOrSlug": z.string().describe("ID of the integration").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}