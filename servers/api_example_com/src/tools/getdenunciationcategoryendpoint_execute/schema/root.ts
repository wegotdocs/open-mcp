import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("ID of the denunciation category")
}