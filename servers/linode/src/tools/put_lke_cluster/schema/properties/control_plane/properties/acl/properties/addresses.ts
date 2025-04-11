import { z } from "zod"

export const inputParams = {
  "ipv4": z.array(z.string()).describe("A list of individual ipv4 addresses or CIDRs to ALLOW. Defaults to `[]`.").optional(),
  "ipv6": z.array(z.string()).describe("A list of individual ipv6 addresses or CIDRs to ALLOW. Defaults to `[]`.").optional()
}