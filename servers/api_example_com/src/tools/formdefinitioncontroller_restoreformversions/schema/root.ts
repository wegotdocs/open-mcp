import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "version": z.string(),
  "draft": z.string(),
  "Authorization": z.string()
}