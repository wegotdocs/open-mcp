import { z } from "zod"

export const inputParamsSchema = {
  "ca_cert": z.string().nullable().optional(),
  "password": z.string().optional(),
  "url": z.string().optional(),
  "username": z.string().optional()
}