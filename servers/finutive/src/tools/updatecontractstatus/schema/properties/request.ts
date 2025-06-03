import { z } from "zod"

export const inputParamsSchema = {
  "status": z.enum(["NOT_SIGNED","SIGNED","SIGNED_OUTSIDE_PLATFORM"]).describe("New contract status"),
  "file": z.string().base64().optional()
}