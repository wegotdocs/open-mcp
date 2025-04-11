import { z } from "zod"

export const inputParams = {
  "skip_ipv6_rdns": z.boolean().describe("When `true`, the `rdns` property for any `ipv6` type addresses always returns `null` regardless of whether RDNS data exists for the address.").optional()
}