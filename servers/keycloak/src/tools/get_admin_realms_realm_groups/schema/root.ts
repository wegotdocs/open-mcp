import { z } from "zod"

export const inputParams = {
  "briefRepresentation": z.boolean().optional(),
  "exact": z.boolean().optional(),
  "first": z.number().int().optional(),
  "max": z.number().int().optional(),
  "populateHierarchy": z.boolean().optional(),
  "q": z.string().optional(),
  "search": z.string().optional()
}