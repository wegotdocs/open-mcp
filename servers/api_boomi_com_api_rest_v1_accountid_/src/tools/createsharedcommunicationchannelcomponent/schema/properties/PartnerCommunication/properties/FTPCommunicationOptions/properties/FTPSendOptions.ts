import { z } from "zod"

export const inputParamsSchema = {
  "ftpAction": z.enum(["actionputrename","actionputappend","actionputerror","actionputoverwrite"]).optional(),
  "moveToDirectory": z.string(),
  "remoteDirectory": z.string(),
  "transferType": z.enum(["ascii","binary"]).optional(),
  "useDefaultSendOptions": z.boolean().optional()
}