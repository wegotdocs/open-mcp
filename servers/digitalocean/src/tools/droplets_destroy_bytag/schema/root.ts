import { z } from "zod"

export const inputParamsSchema = {
  "tag_name": z.string().describe("Specifies Droplets to be deleted by tag.")
}