import { z } from "zod"

export const inputParamsSchema = {
  "content": z.string().optional(),
  "content_type": z.string().optional(),
  "link_type": z.enum(["Child","Other","Parent"]).describe("Content link type"),
  "name": z.string().optional(),
  "team": z.number().int().optional()
}