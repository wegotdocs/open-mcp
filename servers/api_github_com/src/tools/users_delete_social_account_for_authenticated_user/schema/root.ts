import { z } from "zod"

export const inputParamsSchema = {
  "account_urls": z.array(z.string()).describe("Full URLs for the social media profiles to delete.")
}