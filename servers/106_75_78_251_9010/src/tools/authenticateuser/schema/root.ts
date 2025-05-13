import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().min(0).max(128),
  "password": z.string().min(6).max(2147483647)
}