import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this device bay template."),
  "device_type": z.number().int(),
  "name": z.string().min(1).max(64).describe("{module} is accepted as a substitution for the module bay position when attached to a module type."),
  "label": z.string().max(64).describe("Physical label").optional(),
  "description": z.string().max(200).optional()
}