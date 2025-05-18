import { z } from "zod"

export const inputParamsSchema = {
  "alcoholContent": z.boolean().describe("Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.").optional(),
  "restricted": z.boolean().describe("Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present.").optional(),
  "videoGameRating": z.enum(["anyone","m15Plus","m16Plus","m17Plus"]).describe("Video game rating, if any.").optional()
}