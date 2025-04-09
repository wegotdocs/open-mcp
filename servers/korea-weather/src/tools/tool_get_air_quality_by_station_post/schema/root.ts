import { z } from "zod"

export const inputParams = {
  "location": z.string(),
  "station_name": z.string().optional()
}