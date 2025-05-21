import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "password": z.string()
}