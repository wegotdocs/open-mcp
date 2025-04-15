import { z } from "zod"

export const inputParamsSchema = {
  "points": z.array(z.string()).describe("An array of comma separated {latitude,longitude} strings.")
}