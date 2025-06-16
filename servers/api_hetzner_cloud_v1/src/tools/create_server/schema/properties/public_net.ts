import { z } from "zod"

export const inputParamsSchema = {
  "enable_ipv4": z.boolean().describe("Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached.").optional(),
  "enable_ipv6": z.boolean().describe("Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached.").optional(),
  "ipv4": z.number().int().nullable().describe("ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created.").optional(),
  "ipv6": z.number().int().nullable().describe("ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created.").optional()
}