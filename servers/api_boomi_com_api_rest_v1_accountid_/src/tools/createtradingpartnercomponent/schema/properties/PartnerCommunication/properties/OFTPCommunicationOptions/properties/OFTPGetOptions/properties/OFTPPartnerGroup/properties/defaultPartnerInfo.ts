import { z } from "zod"

export const inputParamsSchema = {
  "clientSSLAlias": z.string().optional(),
  "encrypting-certificate": z.string().optional(),
  "session-challenge-certificate": z.string().optional(),
  "sfidsec-encrypt": z.boolean().optional(),
  "sfidsec-sign": z.boolean().optional(),
  "sfidsign": z.boolean().optional(),
  "ssidcmpr": z.boolean().optional(),
  "ssidcode": z.string().optional(),
  "ssidpswd": z.string().optional(),
  "verifying-eerp-certificate": z.string().optional(),
  "verifying-signature-certificate": z.string().optional()
}