import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email(),
  "password": z.string()
}