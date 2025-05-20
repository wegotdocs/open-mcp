import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this module bay template."),
  "device_type": z.number().int().nullable().optional(),
  "module_type": z.number().int().nullable().optional(),
  "name": z.string().min(1).max(64).describe("{module} is accepted as a substitution for the module bay position when attached to a module type.").optional(),
  "label": z.string().max(64).describe("Physical label").optional(),
  "position": z.string().max(30).describe("Identifier to reference when renaming installed components").optional(),
  "description": z.string().max(200).optional()
}