import { z } from "zod"

export const inputParamsSchema = {
  "acceptAnyCertificate": z.boolean().optional(),
  "allowLegacyHelloMessages": z.boolean().optional(),
  "allowUnsafeRenegotiation": z.boolean().optional(),
  "disableHostnameVerification": z.boolean().optional(),
  "disableSNI": z.boolean().optional()
}