import { z } from "zod"

export const inputParamsSchema = {
  "folderPath": z.string().optional(),
  "folderId": z.number().int().optional(),
  "organizationId": z.number().int().optional()
}