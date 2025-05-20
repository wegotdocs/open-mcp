import { z } from "zod"

export const inputParamsSchema = {
  "device_type": z.number().int(),
  "parent": z.number().int().nullable().optional(),
  "name": z.string().min(1).max(64).describe("{module} is accepted as a substitution for the module bay position when attached to a module type."),
  "label": z.string().max(64).describe("Physical label").optional(),
  "role": z.number().int().nullable().optional(),
  "manufacturer": z.number().int().nullable().optional(),
  "part_id": z.string().max(50).describe("Manufacturer-assigned part identifier").optional(),
  "description": z.string().max(200).optional(),
  "component_type": z.string().nullable().optional(),
  "component_id": z.number().int().gte(0).lte(9223372036854776000).nullable().optional()
}