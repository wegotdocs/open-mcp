import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("Indicates whether the control plane firewall is enabled.").optional(),
  "allowed_addresses": z.array(z.string()).describe("An array of public addresses (IPv4 or CIDR) allowed to access the control plane.").optional()
}