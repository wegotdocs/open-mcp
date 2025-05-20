import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this VLAN translation rule."),
  "policy": z.number().int().optional(),
  "local_vid": z.number().int().gte(1).lte(4094).describe("Numeric VLAN ID (1-4094)").optional(),
  "remote_vid": z.number().int().gte(1).lte(4094).describe("Numeric VLAN ID (1-4094)").optional(),
  "description": z.string().max(200).optional()
}