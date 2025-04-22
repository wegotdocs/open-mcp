import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update."),
  "name": z.string().describe("Name of the service. Alphanumerical string with whitespaces up to 50 characters.").optional(),
  "ipAccessList": z.any().optional(),
  "privateEndpointIds": z.any().optional(),
  "releaseChannel": z.enum(["default","fast"]).describe("Select fast if you want to get new ClickHouse releases as soon as they are available. You'll get new features faster, but with a higher risk of bugs. This feature is only available for production services.").optional(),
  "endpoints": z.array(z.any()).describe("List of service endpoints to change").optional(),
  "transparentDataEncryptionKeyId": z.string().describe("The id of the key to rotate").optional()
}