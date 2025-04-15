import { z } from "zod"

export const inputParamsSchema = {
  "snapshot_id": z.string().describe("The unique identifier for the snapshot.")
}