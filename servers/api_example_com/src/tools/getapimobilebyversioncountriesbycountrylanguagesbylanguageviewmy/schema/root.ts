import { z } from "zod"

export const inputParamsSchema = {
  "version": z.string(),
  "country": z.string(),
  "language": z.string(),
  "isNewAccount": z.string().optional(),
  "isNewsletterAccepted": z.string().optional()
}