import { z } from "zod"

export const inputParams = {
  "volume_id": z.string().uuid().describe("The ID of the block storage volume.")
}