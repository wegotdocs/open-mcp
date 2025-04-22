import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization the member is part of."),
  "userId": z.string().uuid().describe("ID of the requested user.")
}