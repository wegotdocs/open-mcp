import { z } from "zod"

export const inputParams = {
  "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint.")
}