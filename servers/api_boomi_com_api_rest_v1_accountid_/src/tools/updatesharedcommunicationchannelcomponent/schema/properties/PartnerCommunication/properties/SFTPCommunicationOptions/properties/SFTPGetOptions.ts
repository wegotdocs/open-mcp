import { z } from "zod"

export const inputParamsSchema = {
  "fileToMove": z.string(),
  "ftpAction": z.enum(["actionget","actiongetdelete","actiongetmove"]).optional(),
  "maxFileCount": z.number().int(),
  "moveToDirectory": z.string(),
  "moveToForceOverride": z.boolean().optional(),
  "remoteDirectory": z.string(),
  "useDefaultGetOptions": z.boolean().optional()
}