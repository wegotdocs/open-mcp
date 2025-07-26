import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().min(1),
  "password": z.string().min(1)
}