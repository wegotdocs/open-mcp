import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Load Balancer."),
  "ip": z.string().describe("IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address").optional(),
  "network": z.number().int().describe("ID of an existing network to attach the Load Balancer to")
}