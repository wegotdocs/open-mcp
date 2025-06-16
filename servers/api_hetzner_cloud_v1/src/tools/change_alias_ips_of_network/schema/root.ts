import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "alias_ips": z.array(z.string()).describe("New alias IPs to set for this Server"),
  "network": z.number().int().describe("ID of an existing Network already attached to the Server")
}