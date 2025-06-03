import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string(),
  "password": z.string()
}