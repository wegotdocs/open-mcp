import { z } from "zod"

export const inputParams = {
  "name": z.string(),
  "csvdata": z.array(z.record(z.any()))
}