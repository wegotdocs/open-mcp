import { z } from "zod"

export const inputParamsSchema = {
  "policy": z.number().int(),
  "local_vid": z.number().int().gte(1).lte(4094).describe("Numeric VLAN ID (1-4094)"),
  "remote_vid": z.number().int().gte(1).lte(4094).describe("Numeric VLAN ID (1-4094)"),
  "description": z.string().max(200).optional()
}