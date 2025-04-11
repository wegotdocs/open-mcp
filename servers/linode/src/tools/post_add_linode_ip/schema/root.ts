import { z } from "zod"

export const inputParams = {
  "public": z.boolean().describe("Whether to create a public or private IPv4 address."),
  "type": z.literal("ipv4").describe("The type of address you are allocating. Only IPv4 addresses may be allocated through this operation.")
}