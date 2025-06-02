import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "version": z.string(),
  "country": z.string(),
  "language": z.string()
}