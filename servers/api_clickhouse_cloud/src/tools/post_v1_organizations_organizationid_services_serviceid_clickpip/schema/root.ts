import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to create the ClickPipe for."),
  "name": z.string().describe("Name of the ClickPipe.").optional(),
  "description": z.string().describe("Description of the ClickPipe.").optional(),
  "source": z.any().optional(),
  "destination": z.any().optional(),
  "fieldMappings": z.array(z.any()).describe("Field mappings of the ClickPipe.").optional()
}