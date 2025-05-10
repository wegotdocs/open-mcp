import { z } from "zod"

export const inputParamsSchema = {
  "upload_id": z.string().describe("The ID of the Upload.\n"),
  "part_ids": z.array(z.string()).describe("The ordered list of Part IDs.\n"),
  "md5": z.string().describe("The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.\n").optional()
}