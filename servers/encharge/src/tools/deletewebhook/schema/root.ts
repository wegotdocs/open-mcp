import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Id of the event subscription.")
}