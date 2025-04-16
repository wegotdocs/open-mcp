import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "path": z.string().nullable().optional(),
  "accessible": z.boolean().optional(),
  "freeSpace": z.number().int().nullable().optional(),
  "unmappedFolders": z.array(z.object({ "name": z.string().nullable().optional(), "path": z.string().nullable().optional(), "relativePath": z.string().nullable().optional() }).strict()).nullable().optional()
}