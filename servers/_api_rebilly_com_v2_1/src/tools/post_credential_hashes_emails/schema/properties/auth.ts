import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["none","plain","login","cram-md5"]).optional()
}