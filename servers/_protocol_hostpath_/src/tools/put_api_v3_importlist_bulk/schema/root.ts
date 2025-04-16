import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.number().int()).nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "enabled": z.boolean().nullable().optional(),
  "enableAuto": z.boolean().nullable().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional()
}