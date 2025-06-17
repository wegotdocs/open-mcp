import { z } from "zod"

export const inputParamsSchema = {
  "totp_code": z.string().describe("TOTP generated from enrollment secret")
}