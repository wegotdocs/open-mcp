import { z } from "zod"

export const inputParamsSchema = {
  "scan-group-id": z.number().int().describe("Unique ID of the scan group to upload CSV to")
}