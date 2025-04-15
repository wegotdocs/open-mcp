import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the domain for which we would like to check the status."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}