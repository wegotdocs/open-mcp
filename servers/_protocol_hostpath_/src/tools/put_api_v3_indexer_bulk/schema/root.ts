import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enableRss": z.boolean().nullable().optional(),
  "enableAutomaticSearch": z.boolean().nullable().optional(),
  "enableInteractiveSearch": z.boolean().nullable().optional(),
  "priority": z.number().int().nullable().optional()
}