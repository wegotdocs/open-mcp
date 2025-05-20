import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this VLAN translation policy."),
  "name": z.string().min(1).max(100),
  "description": z.string().max(200).optional()
}