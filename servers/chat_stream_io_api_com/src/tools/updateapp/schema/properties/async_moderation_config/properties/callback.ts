import { z } from "zod"

export const inputParamsSchema = {
  "mode": z.enum(["CALLBACK_MODE_NONE","CALLBACK_MODE_REST","CALLBACK_MODE_TWIRP"]).optional(),
  "server_url": z.string().optional()
}