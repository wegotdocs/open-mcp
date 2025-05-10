import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service that owns the ClickPipe."),
  "clickPipeId": z.string().uuid().describe("ID of the ClickPipe to delete.")
}