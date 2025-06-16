import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "dns_ptr": z.string().nullable().describe("Hostname to set as a reverse DNS PTR entry, reset to original value if `null`"),
  "ip": z.string().describe("Primary IP address for which the reverse DNS entry should be set")
}