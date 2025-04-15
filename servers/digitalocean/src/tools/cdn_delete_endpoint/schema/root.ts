import { z } from "zod"

export const inputParamsSchema = {
  "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint.")
}