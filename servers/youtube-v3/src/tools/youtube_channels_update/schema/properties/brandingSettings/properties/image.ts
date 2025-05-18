import { z } from "zod"

export const inputParamsSchema = {
  "bannerExternalUrl": z.string().describe("This is generated when a ChannelBanner.Insert request has succeeded for the given channel.").optional()
}