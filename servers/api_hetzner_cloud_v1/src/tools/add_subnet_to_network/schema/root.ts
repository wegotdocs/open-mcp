import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Network."),
  "ip_range": z.string().describe("IP range of the subnet.\n\nUses CIDR notation.\n\nMust be a subnet of the parent [Networks](#networks) `ip_range`.\n\nMust not overlap with any other subnets or with any destinations in routes.\n\nMinimum network size is /30. We highly recommend that you pick a larger subnet with a /24 netmask.\n").optional(),
  "network_zone": z.string().describe("Name of the [Network Zone](#network-zones).\n\nThe [Location](#locations) contains the `network_zone` property it belongs to.\n | Name of the [Network Zone](#network-zones).\n\nThe [Location](#locations) contains the `network_zone` it belongs to.\n"),
  "type": z.enum(["cloud","server","vswitch"]).describe("Type of subnet.\n\n- `cloud` - Used to connect cloud [Servers](#servers) and [Load Balancers](#load-balancers).\n- `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.\n- `vswitch` - Used to [connect cloud Servers and Load Balancers with dedicated Servers](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch).\n"),
  "vswitch_id": z.number().int().describe("ID of the robot vSwitch.\n\nMust only be supplied for subnets of type `vswitch`.\n | ID of the robot vSwitch.\n\nMust be supplied if the subnet is of type `vswitch`.\n").optional()
}