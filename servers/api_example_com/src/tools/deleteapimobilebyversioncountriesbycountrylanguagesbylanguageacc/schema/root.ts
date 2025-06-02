import { z } from "zod"

export const inputParamsSchema = {
  "version": z.string(),
  "country": z.string(),
  "language": z.string(),
  "password": z.string()
}