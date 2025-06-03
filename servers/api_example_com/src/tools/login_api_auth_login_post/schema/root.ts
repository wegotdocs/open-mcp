import { z } from "zod"

export const inputParamsSchema = {
  "login": z.string(),
  "password": z.string()
}