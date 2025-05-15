import { z } from "zod"

export const inputParamsSchema = {
  "Node": z.array(z.object({ "Character": z.record(z.any()).optional(), "DateTime": z.object({ "format": z.string().optional() }).optional(), "Number": z.object({ "format": z.string().optional(), "impliedDecimal": z.number().int().optional(), "signed": z.boolean().optional() }).optional(), "enforceUnique": z.boolean().optional(), "fieldLengthValidation": z.boolean().optional(), "mandatory": z.boolean().optional(), "maxLength": z.number().int().optional(), "minLength": z.number().int().optional(), "name": z.string().optional() })).optional()
}