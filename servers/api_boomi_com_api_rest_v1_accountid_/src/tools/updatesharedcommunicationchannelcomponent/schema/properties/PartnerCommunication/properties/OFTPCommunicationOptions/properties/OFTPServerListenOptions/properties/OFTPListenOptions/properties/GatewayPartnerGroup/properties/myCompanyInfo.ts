import { z } from "zod"

export const inputParamsSchema = {
  "decrypting-certificate": z.string().optional(),
  "session-authentication-certificate": z.string().optional(),
  "signing-certificate": z.string().optional(),
  "signing-eerp-certificate": z.string().optional(),
  "ssidcode": z.string().optional(),
  "ssidpswd": z.string().optional()
}