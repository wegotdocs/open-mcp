import { z } from "zod"

export const inputParamsSchema = {
  "is_document_upload": z.boolean().describe("Used to specify whether the Link session is Identity Document Upload").optional(),
  "account_ids": z.array(z.string()).describe("An array of `account_ids`. Currently can only contain one `account_id`. Must be populated if using Document Upload.").optional(),
  "parsing_configs": z.array(z.enum(["ocr","risk_signals"]).describe("Analysis options to enable for document parsing")).describe("An array of parsing configurations. Valid parsing configurations are `ocr` and `risk_signals`. If parsing configurations are omitted, defaults to `ocr`").optional()
}