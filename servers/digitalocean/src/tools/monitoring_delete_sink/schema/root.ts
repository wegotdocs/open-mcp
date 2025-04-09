import { z } from "zod"

export const inputParams = {
  "sink_uuid": z.string().describe("A unique identifier for a sink.")
}