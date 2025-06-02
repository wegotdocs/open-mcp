import { z } from "zod"

export const inputParamsSchema = {
  "Feature-Flags": z.array(z.literal("obs_station_provider")).describe("Enable future and experimental features (see documentation for more info):\n* obs_station_provider: Include the data provider in the metadata about observation stations\n").optional()
}