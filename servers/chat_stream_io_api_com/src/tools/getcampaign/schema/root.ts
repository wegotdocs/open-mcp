import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(255).describe("The ID of the campaign (uuid)"),
  "prev": z.string().describe("Token for the previous page of campaign users").optional(),
  "next": z.string().describe("Token for the next page of campaign users").optional(),
  "limit": z.number().int().gte(0).lte(1000).describe("Maximum number of campaign users to return in a single request (max: 1000)").optional()
}