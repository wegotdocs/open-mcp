import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "version": z.string(),
  "Authorization": z.string()
}