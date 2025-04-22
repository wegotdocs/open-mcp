import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the key."),
  "keyId": z.string().uuid().describe("ID of the key to update."),
  "name": z.string().describe("Name of the key").optional(),
  "roles": z.array(z.enum(["admin","developer","query_endpoints"])).describe("List of roles assigned to the key. Contains at least 1 element.").optional(),
  "expireAt": z.string().datetime({ offset: true }).describe("Timestamp the key expires. If not present or is empty the key never expires. ISO-8601.").optional(),
  "state": z.enum(["enabled","disabled"]).describe("State of the key: 'enabled', 'disabled'.").optional(),
  "ipAccessList": z.array(z.any()).describe("List of IP addresses allowed to access the API using this key").optional()
}