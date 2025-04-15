import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique deployment identifier"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}