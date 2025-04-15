import { z } from "zod"

export const inputParamsSchema = {
  "destination_uuid": z.string().describe("A unique identifier for a destination.")
}