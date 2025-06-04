import { z } from "zod"

export const inputParamsSchema = {
  "MediaID": z.string().regex(new RegExp("^[a-zA-Z0-9]+-[0-9a-fA-F-]+$")).describe("Media ID")
}