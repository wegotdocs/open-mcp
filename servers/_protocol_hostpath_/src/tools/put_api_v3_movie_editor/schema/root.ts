import { z } from "zod"

export const inputParamsSchema = {
  "movieIds": z.array(z.number().int()).nullable().optional(),
  "monitored": z.boolean().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "applyTags": z.enum(["add","remove","replace"]).optional(),
  "moveFiles": z.boolean().optional(),
  "deleteFiles": z.boolean().optional(),
  "addImportExclusion": z.boolean().optional()
}