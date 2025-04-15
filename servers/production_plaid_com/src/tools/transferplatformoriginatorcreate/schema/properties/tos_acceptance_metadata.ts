import { z } from "zod"

export const inputParamsSchema = {
  "agreement_accepted": z.boolean().describe("Indicates whether the TOS agreement was accepted"),
  "originator_ip_address": z.string().describe("The IP address of the originator when they accepted the TOS. Formatted as an IPv4 or IPv6 IP address"),
  "agreement_accepted_at": z.string().datetime({ offset: true }).describe("ISO8601 timestamp indicating when the originator accepted the TOS")
}