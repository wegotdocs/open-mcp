import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enable": z.boolean().nullable().optional(),
  "priority": z.number().int().nullable().optional(),
  "removeCompletedDownloads": z.boolean().nullable().optional(),
  "removeFailedDownloads": z.boolean().nullable().optional()
}