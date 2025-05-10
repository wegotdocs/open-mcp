import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the backup."),
  "serviceId": z.string().uuid().describe("ID of the service the backup was created from.")
}