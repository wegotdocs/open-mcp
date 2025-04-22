import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update state."),
  "command": z.enum(["start","stop"]).describe("Command to change the state: 'start', 'stop'.").optional()
}