import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string().min(1).max(128),
  "description": z.string().max(1048576),
  "version": z.number().int(),
  "exclusive": z.boolean().optional(),
  "predicates": z.array(z.object({ "value": z.string().min(1).max(512), "expanded": z.string().max(1048576).optional(), "exclusive": z.boolean().optional(), "description": z.string().max(1048576).optional(), "colour": z.string().regex(new RegExp("^#[0-9a-fA-F]{6,6}|$")).optional() })).optional(),
  "values": z.array(z.object({ "predicate": z.string().min(1).max(512), "entry": z.array(z.object({ "value": z.string().min(1).max(512), "expanded": z.string().max(1048576).optional(), "colour": z.string().regex(new RegExp("^#[0-9a-fA-F]{6,6}|$")).optional(), "description": z.string().max(1048576).optional(), "numerical_value": z.number().int().optional() })).optional() })).optional()
}