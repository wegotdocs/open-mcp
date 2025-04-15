import { z } from "zod"

export const inputParams = {
  "disk_id": z.number().int().describe("The Disk ID, or `null` if a Volume is assigned to this slot.").optional(),
  "volume_id": z.number().int().nullable().describe("The Volume ID, or `null` if a Disk is assigned to this slot.").optional()
}