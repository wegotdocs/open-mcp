import { z } from "zod"

export const inputParamsSchema = {
  "privacyStatus": z.enum(["public","unlisted","private"]).describe("The playlist's privacy status.").optional()
}