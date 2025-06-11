import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "name": z.string().describe("Service name").optional(),
  "state": z.enum(["UNKNOWN","STOPPED","START_PENDING","RUNNING","STOP_PENDING","PAUSE_PENDING","PAUSED","CONTINUE_PENDING"]).describe("Service state").optional()
}