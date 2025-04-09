import { z } from "zod"

export const inputParams = {
  "snapshot_id": z.string().describe("The unique identifier for the snapshot.")
}