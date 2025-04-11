import { z } from "zod"

export const inputParams = {
  "ips": z.array(z.string().ip()).describe("A list of secondary Linode IPs to share with the primary Linode.\n\n- Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)\n- Can include both private and public IPv4 addresses.\n- You must have access to all of these addresses and they must be in the same Region as the primary Linode.\n- Enter an empty array to remove all shared IP addresses."),
  "linode_id": z.number().int().describe("The ID of the primary Linode that the addresses will be shared with.")
}