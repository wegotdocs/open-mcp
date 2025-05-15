import { z } from "zod"

export const inputParamsSchema = {
  "deleteAfterRead": z.boolean().optional(),
  "fileFilter": z.string(),
  "filterMatchType": z.enum(["wildcard","regex"]).optional(),
  "getDirectory": z.string(),
  "maxFileCount": z.number().int().optional(),
  "useDefaultGetOptions": z.boolean().optional()
}