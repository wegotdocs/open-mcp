import { z } from "zod"

export const inputParamsSchema = {
  "briefRepresentation": z.boolean().describe("Only return basic information (only guaranteed to return id, username, created, first and last name, email, enabled state, email verification state, federation link, and access. Note that it means that namely user attributes, required actions, and not before are not returned.)").optional(),
  "first": z.number().int().describe("Pagination offset").optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional()
}