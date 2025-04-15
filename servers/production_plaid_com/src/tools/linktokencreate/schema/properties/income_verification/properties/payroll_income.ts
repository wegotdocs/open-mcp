import { z } from "zod"

export const inputParamsSchema = {
  "flow_types": z.array(z.enum(["payroll_digital_income","payroll_document_income"]).describe("Flow types to retrieve payroll income data")).nullable().describe("The types of payroll income verification to enable for the Link session. If none are specified, then users will see both document and digital payroll income.").optional(),
  "is_update_mode": z.boolean().describe("An identifier to indicate whether the income verification Link token will be used for update mode. This field is only relevant for participants in the Payroll Income Refresh beta.").optional(),
  "item_id_to_update": z.string().nullable().describe("Uniquely identify a payroll income Item to update with.  This field is only relevant for participants in the Payroll Income Refresh beta.").optional(),
  "parsing_config": z.array(z.enum(["ocr","risk_signals"]).describe("Analysis options to enable for document parsing")).nullable().describe("The types of analysis to enable for document uploads. If this field is not provided, then docs will undergo OCR parsing only.").optional()
}