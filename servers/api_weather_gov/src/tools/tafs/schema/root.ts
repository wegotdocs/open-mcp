import { z } from "zod"

export const inputParams = {
  "stationId": z.string().describe("Observation station ID")
}