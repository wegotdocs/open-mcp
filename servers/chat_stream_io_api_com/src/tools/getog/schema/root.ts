import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().describe("URL to be scraped")
}