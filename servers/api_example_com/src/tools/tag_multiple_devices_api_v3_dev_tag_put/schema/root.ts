import { z } from "zod"

export const inputParamsSchema = {
  "flush": z.union([z.number().int(), z.null()]).describe("Flush out old tags? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "dev_id_list": z.array(z.number().int()),
  "tag_id_list": z.array(z.number().int())
}