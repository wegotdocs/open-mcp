import { z } from "zod"

export const inputParamsSchema = {
  "sink_uuid": z.string().describe("A unique identifier for a sink.")
}