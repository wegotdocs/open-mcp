import { z } from "zod"

export const inputParamsSchema = {
  "codespace_name": z.string().describe("The name of the codespace."),
  "export_id": z.string().describe("The ID of the export operation, or `latest`. Currently only `latest` is currently supported.")
}