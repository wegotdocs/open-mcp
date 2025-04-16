import { z } from "zod"

export const inputParamsSchema = {
  "collectionIds": z.array(z.number().int()).nullable().optional(),
  "monitored": z.boolean().nullable().optional(),
  "monitorMovies": z.boolean().nullable().optional(),
  "searchOnAdd": z.boolean().nullable().optional(),
  "qualityProfileId": z.number().int().nullable().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional()
}