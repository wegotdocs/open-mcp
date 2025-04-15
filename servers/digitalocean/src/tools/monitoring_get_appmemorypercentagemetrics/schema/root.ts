import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string().describe("The app UUID."),
  "app_component": z.string().describe("The app component name.").optional(),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}