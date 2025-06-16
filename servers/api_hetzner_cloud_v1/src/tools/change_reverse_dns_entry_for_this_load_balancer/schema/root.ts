import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Load Balancer."),
  "dns_ptr": z.string().nullable().describe("Hostname to set as a reverse DNS PTR entry"),
  "ip": z.string().describe("Public IP address for which the reverse DNS entry should be set")
}