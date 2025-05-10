import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that will own the key."),
  "name": z.string().describe("Name of the key.").optional(),
  "expireAt": z.string().datetime({ offset: true }).describe("Timestamp the key expires. If not present or is empty the key never expires. ISO-8601.").optional(),
  "state": z.enum(["enabled","disabled"]).describe("Initial state of the key: 'enabled', 'disabled'. If not provided the new key will be 'enabled'.").optional(),
  "hashData": z.any().optional(),
  "roles": z.array(z.enum(["admin","developer","query_endpoints"])).describe("List of roles assigned to the key. Contains at least 1 element.").optional(),
  "ipAccessList": z.array(z.any()).describe("List of IP addresses allowed to access the API using this key").optional()
}