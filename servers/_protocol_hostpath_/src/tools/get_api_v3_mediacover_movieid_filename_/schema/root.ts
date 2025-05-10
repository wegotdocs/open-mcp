import { z } from "zod"

export const inputParamsSchema = {
  "movieId": z.number().int(),
  "filename": z.string().regex(new RegExp("(.+)\\.(jpg|png|gif)"))
}