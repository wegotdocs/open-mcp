import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("A unique integer value identifying this client update."),
  "version": z.string().max(30),
  "updater": z.string().readonly(),
  "package": z.string().url(),
  "target": z.string(),
  "package_hash": z.string().max(68).nullable().optional(),
  "b_id": z.number().int().readonly(),
  "signature": z.string().max(300).nullable().optional()
}