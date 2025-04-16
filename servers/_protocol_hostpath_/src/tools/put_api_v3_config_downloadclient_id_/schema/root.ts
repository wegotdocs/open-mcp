import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "downloadClientWorkingFolders": z.string().nullable().optional(),
  "enableCompletedDownloadHandling": z.boolean().optional(),
  "checkForFinishedDownloadInterval": z.number().int().optional(),
  "autoRedownloadFailed": z.boolean().optional(),
  "autoRedownloadFailedFromInteractiveSearch": z.boolean().optional()
}