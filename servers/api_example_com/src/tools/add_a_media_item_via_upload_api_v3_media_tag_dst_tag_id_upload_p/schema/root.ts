import { z } from "zod"

export const inputParamsSchema = {
  "dst_tag_id": z.number().int(),
  "conflict": z.number().int().describe("Indicates how to handle name conflicts. Empty / 0: Refuses and returns 409 Conflict; 1: Replaces. If the file extensions are not the same, 403 Forbidden will be returned. If the files are identical, the request will be ignored and 304 Not Modified will be returned; Any / 2: Creates anyway. An index number will be added to the name.").optional(),
  "session_id": z.string().optional()
}