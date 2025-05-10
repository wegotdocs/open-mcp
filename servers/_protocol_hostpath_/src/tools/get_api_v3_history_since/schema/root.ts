import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().datetime({ offset: true }).optional(),
  "eventType": z.enum(["unknown","grabbed","downloadFolderImported","downloadFailed","movieFileDeleted","movieFolderImported","movieFileRenamed","downloadIgnored"]).optional(),
  "includeMovie": z.boolean().optional()
}