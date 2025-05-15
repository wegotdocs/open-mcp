import { z } from "zod"

export const inputParamsSchema = {
  "ftpAction": z.enum(["actionputrename","actionputappend","actionputerror","actionputoverwrite"]).optional(),
  "moveToDirectory": z.string(),
  "moveToForceOverride": z.boolean().optional(),
  "remoteDirectory": z.string(),
  "useDefaultSendOptions": z.boolean().optional()
}