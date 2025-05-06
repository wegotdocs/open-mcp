import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "visibility": z.enum(["all","members","admin","self"]).optional(),
  "is_private": z.boolean().optional()
}