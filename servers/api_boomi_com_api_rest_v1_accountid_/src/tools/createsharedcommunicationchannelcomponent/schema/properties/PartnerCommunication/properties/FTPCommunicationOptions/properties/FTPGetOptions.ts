import { z } from "zod"

export const inputParamsSchema = {
  "fileToMove": z.string(),
  "ftpAction": z.enum(["actionget","actiongetdelete","actiongetmove"]).optional(),
  "maxFileCount": z.number().int(),
  "remoteDirectory": z.string(),
  "transferType": z.enum(["ascii","binary"]).optional(),
  "useDefaultGetOptions": z.boolean().optional()
}