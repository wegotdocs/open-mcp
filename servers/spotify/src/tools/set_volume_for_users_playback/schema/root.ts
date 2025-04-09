import { z } from "zod"

export const inputParams = {
  "volume_percent": z.number().int().describe("The volume to set. Must be a value from 0 to 100 inclusive.\n"),
  "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n").optional()
}