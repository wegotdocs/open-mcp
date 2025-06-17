import { z } from "zod"

export const inputParamsSchema = {
  "ca_cert": z.string().optional(),
  "password": z.string(),
  "url": z.string(),
  "username": z.string()
}