import { z } from "zod"

export const inputParamsSchema = {
  "privacyStatus": z.enum(["public","unlisted","private"]).describe("This resource's privacy status.").optional()
}