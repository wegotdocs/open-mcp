import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the denunciation category")
}