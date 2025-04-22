import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization to update."),
  "name": z.string().describe("Name of the organization.").optional(),
  "privateEndpoints": z.any().optional()
}