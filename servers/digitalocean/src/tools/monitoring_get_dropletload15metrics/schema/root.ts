import { z } from "zod"

export const inputParamsSchema = {
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}