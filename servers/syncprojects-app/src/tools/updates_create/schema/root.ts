import { z } from "zod"

export const inputParams = {
  "version": z.string().max(30),
  "updater": z.string().readonly(),
  "package": z.string().url(),
  "target": z.string(),
  "package_hash": z.string().max(68).nullable().optional(),
  "id": z.number().int().readonly(),
  "signature": z.string().max(300).nullable().optional()
}