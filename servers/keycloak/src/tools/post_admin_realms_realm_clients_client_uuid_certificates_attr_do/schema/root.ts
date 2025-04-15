import { z } from "zod"

export const inputParamsSchema = {
  "realmCertificate": z.boolean().optional(),
  "storePassword": z.string().optional(),
  "keyPassword": z.string().optional(),
  "keyAlias": z.string().optional(),
  "realmAlias": z.string().optional(),
  "format": z.string().optional()
}