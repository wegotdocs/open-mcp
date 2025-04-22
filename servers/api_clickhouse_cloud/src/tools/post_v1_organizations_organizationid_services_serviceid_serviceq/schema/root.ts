import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "serviceId": z.string().uuid().describe("ID of the requested service."),
  "roles": z.array(z.enum(["sql_console_read_only","sql_console_admin"])).describe("The roles").optional(),
  "openApiKeys": z.array(z.string()).describe("The version of the service query endpoint").optional(),
  "allowedOrigins": z.string().describe("The allowed origins as comma separated list of domains").optional()
}