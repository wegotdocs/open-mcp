import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "email": z.string().email(),
  "password": z.string()
}