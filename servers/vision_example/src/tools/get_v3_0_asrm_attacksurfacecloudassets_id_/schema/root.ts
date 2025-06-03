import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().min(1).max(128).describe("The ID of the cloud asset on the Trend Vision One platform")
}