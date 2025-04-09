import { z } from "zod"

export const inputParams = {
  "tag_name": z.string().describe("Specifies Droplets to be deleted by tag.")
}