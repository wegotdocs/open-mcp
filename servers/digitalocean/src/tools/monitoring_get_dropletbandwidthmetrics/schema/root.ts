import { z } from "zod"

export const inputParamsSchema = {
  "host_id": z.string().describe("The droplet ID."),
  "interface": z.enum(["private","public"]).describe("The network interface."),
  "direction": z.enum(["inbound","outbound"]).describe("The traffic direction."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}