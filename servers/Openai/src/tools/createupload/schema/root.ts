import { z } from "zod"

export const inputParamsSchema = {
  "filename": z.string().describe("The name of the file to upload.\n"),
  "purpose": z.enum(["assistants","batch","fine-tune","vision"]).describe("The intended purpose of the uploaded file.\n\nSee the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).\n"),
  "bytes": z.number().int().describe("The number of bytes in the file you are uploading.\n"),
  "mime_type": z.string().describe("The MIME type of the file.\n\nThis must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.\n")
}