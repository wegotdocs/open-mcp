import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("A unique integer value identifying this client update."),
  "version": z.string().max(30).optional(),
  "updater": z.string().readonly().optional(),
  "package": z.string().url().optional(),
  "target": z.string().optional(),
  "package_hash": z.string().max(68).nullable().optional(),
  "b_id": z.number().int().readonly().optional(),
  "signature": z.string().max(300).nullable().optional()
}