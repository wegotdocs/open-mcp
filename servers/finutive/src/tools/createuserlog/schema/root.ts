import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["ACCESS_DAY","ACCESS","CREATE_INVOICE","UPLOAD_DOCUMENT","SEND_MESSAGE","CREATE_LABORAL_FLOW","CONCILIATE_TRANSACTION","CREATE_MESSAGE","CALENDLY","OCR_MAIL","UPLOAD_SALES","UPLOAD_EXPENSE"]),
  "extra_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extra_data` to the tool, first call the tool `expandSchema` with \"/properties/extra_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "business_id": z.string(),
  "user_id": z.string()
}