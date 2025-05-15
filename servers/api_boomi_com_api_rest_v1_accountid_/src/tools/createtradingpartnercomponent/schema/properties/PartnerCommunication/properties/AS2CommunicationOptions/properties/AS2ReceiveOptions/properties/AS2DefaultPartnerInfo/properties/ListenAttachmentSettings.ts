import { z } from "zod"

export const inputParamsSchema = {
  "attachmentCache": z.string().optional(),
  "attachmentContentType": z.array(z.enum(["application/xml","application/pdf","application/msword","image/tiff","image/jpeg","text/plain"])).optional(),
  "multipleAttachments": z.boolean().optional()
}