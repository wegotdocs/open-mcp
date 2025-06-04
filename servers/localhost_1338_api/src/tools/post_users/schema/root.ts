import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string(),
  "username": z.string(),
  "password": z.string()
}