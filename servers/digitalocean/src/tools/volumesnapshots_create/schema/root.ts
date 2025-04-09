import { z } from "zod"

export const inputParams = {
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "name": z.string().describe("A human-readable name for the volume snapshot.").optional(),
  "tags": z.array(z.string()).nullable().describe("A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags.").optional()
}