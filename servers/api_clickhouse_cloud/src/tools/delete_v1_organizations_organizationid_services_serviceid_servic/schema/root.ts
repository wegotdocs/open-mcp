import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service.")
}