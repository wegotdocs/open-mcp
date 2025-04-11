import { z } from "zod"

export const inputParams = {
  "linode_id": z.number().int().describe("The ID of a Linode you have access to that this address will be allocated to."),
  "public": z.boolean().describe("Whether to create a public or private IPv4 address."),
  "type": z.literal("ipv4").describe("The type of address you are requesting. Only IPv4 addresses may be allocated through this operation.")
}