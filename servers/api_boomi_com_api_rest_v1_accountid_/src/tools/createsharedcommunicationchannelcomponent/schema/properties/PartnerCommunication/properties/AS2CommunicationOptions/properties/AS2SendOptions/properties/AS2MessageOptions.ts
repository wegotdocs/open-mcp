import { z } from "zod"

export const inputParamsSchema = {
  "attachmentCache": z.string().optional(),
  "attachmentOption": z.enum(["BATCH","DOCUMENT_CACHE"]).optional(),
  "compressed": z.boolean().optional(),
  "dataContentType": z.enum(["textplain","binary","edifact","edix12","applicationxml","textxml"]).optional(),
  "encrypted": z.boolean().optional(),
  "encryptionAlgorithm": z.enum(["na","tripledes","des","rc2-128","rc2-64","rc2-40","aes-128","aes-192","aes-256"]).optional(),
  "maxDocumentCount": z.number().int().optional(),
  "multipleAttachments": z.boolean().optional(),
  "signed": z.boolean().optional(),
  "signingDigestAlg": z.enum(["SHA1","SHA224","SHA256","SHA384","SHA512"]).optional(),
  "subject": z.string()
}