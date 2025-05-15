import { z } from "zod"

export const inputParamsSchema = {
  "attachmentCache": z.string().optional(),
  "compressed": z.boolean().optional(),
  "contentTransferEncoding": z.enum(["binary","base64"]).optional(),
  "encryptServiceHeader": z.boolean().optional(),
  "encrypted": z.boolean().optional(),
  "encryptionAlgorithm": z.enum(["na","tripledes","des","rc2-128","rc2-64","rc2-40","aes-128","aes-192","aes-256"]).optional(),
  "signatureDigestAlgorithm": z.enum(["SHA1","SHA224","SHA256","SHA384","SHA512"]).optional(),
  "signed": z.boolean().optional()
}