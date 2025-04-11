import { z } from "zod"

export const inputParams = {
  "linode_id": z.number().int().describe("The ID of the Linode to assign this range to. The SLAAC address for the provided Linode is used as the range's `route_target`.\n\n- __Required__ if `route_target` is omitted from the request.\n\n- Mutually exclusive with `route_target`. Submitting values for both properties in a request results in an error.").optional(),
  "prefix_length": z.union([z.literal(56), z.literal(64)]).describe("The prefix length of the IPv6 range."),
  "route_target": z.string().ip({ version: "v6" }).describe("The IPv6 SLAAC address to assign this range to.\n\n- __Required__ if `linode_id` is omitted from the request.\n\n- Mutually exclusive with `linode_id`. Submitting values for both properties in a request results in an error.\n\n> 📘\n>\n> You need to omit the `/128` prefix length of the SLAAC address when using this property.").optional()
}