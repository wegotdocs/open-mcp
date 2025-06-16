import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Primary IP."),
  "dns_ptr": z.string().describe("Domain Name to point to.\n\nPTR record content used for reverse DNS.\n | DNS pointer for the specific IP address"),
  "ip": z.string().describe("Single IPv4 or IPv6 address to create pointer for.\n | Single IPv6 address of this Server for which the reverse DNS entry has been set up")
}