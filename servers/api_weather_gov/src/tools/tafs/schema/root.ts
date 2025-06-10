import { z } from "zod"

export const inputParamsSchema = {
  "stationId": z.string().describe("Observation station ID")
}