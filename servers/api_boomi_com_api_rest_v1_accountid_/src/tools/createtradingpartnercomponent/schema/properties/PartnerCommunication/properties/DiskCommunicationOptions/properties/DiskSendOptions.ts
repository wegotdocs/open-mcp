import { z } from "zod"

export const inputParamsSchema = {
  "createDirectory": z.boolean().optional(),
  "sendDirectory": z.string(),
  "useDefaultSendOptions": z.boolean().optional(),
  "writeOption": z.enum(["unique","over","append","abort"]).optional()
}