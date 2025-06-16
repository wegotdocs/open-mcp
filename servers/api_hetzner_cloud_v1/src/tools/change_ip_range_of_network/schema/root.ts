import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Network."),
  "ip_range": z.string().describe("IP range of the [Network](#networks).\n\nUses CIDR notation.\n\nMust span all included subnets. Must be one of the private IPv4 ranges of RFC1918.\n\nMinimum network size is /24. We highly recommend that you pick a larger [Network](#networks) with a /16 netmask.\n")
}