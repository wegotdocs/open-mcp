import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "alias_ips": z.array(z.string()).describe("Additional IPs to be assigned to this Server").optional(),
  "ip": z.string().describe("IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address").optional(),
  "network": z.number().int().describe("ID of an existing network to attach the Server to")
}