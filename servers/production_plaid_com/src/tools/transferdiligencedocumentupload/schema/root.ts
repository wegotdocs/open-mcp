import { z } from "zod"

export const inputParamsSchema = {
  "originator_client_id": z.string().describe("The Client ID of the originator whose document that you want to upload."),
  "file": z.string().base64().describe("A file to upload. The file size must be less than 20MB. Supported file extensions: .pdf."),
  "purpose": z.literal("DUE_DILIGENCE").describe("Specifies the purpose of the uploaded file.\n\n`\"DUE_DILIGENCE\"` - The transfer due diligence document of the originator.")
}