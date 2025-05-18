import { z } from "zod"

export const inputParamsSchema = {
  "deletedMessageId": z.string().optional()
}