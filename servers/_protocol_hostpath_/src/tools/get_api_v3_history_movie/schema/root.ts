import { z } from "zod"

export const inputParamsSchema = {
  "movieId": z.number().int().optional(),
  "eventType": z.enum(["unknown","grabbed","downloadFolderImported","downloadFailed","movieFileDeleted","movieFolderImported","movieFileRenamed","downloadIgnored"]).optional(),
  "includeMovie": z.boolean().optional()
}