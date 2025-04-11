import { z } from "zod"

export const inputParams = {
  "rdns": z.string().nullable().describe("The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.")
}