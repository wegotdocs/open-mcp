import { z } from "zod"

export const inputParamsSchema = {
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}