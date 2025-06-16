import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Network."),
  "destination": z.string().describe("Destination network or host of the route.\n\nPackages addressed for IPs matching the destination IP prefix will be send to the specified gateway.\n\nMust be one of\n* private IPv4 ranges of RFC1918\n* or `0.0.0.0/0`.\n\nMust not overlap with\n* an existing ip_range in any subnets\n* or with any destinations in other routes\n* or with `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of [Servers](#servers).\n"),
  "gateway": z.string().describe("Gateway of the route.\n\nPackages addressed for the specified destination will be send to this IP address.\n\nCannot be\n* the first IP of the networks ip_range,\n* an IP behind a vSwitch or\n* `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of [Servers](#servers).\n")
}