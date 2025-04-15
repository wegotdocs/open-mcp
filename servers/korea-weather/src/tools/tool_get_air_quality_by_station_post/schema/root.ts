import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string(),
  "station_name": z.string().optional()
}