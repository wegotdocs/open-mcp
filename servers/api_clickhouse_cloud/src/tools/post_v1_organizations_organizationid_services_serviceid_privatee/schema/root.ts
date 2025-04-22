import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service."),
  "id": z.string().describe("Private endpoint identifier").optional(),
  "description": z.string().describe("Description of private endpoint").optional()
}