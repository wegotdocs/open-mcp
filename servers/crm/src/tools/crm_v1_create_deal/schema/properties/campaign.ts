import { z } from "zod"

export const inputParamsSchema = {
  "_id": z.string().optional()
}