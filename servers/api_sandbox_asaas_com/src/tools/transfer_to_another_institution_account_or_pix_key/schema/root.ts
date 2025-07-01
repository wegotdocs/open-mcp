import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("Amount to be transferred"),
  "bankAccount": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bankAccount` to the tool, first call the tool `expandSchema` with \"/properties/bankAccount\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Enter your account details if it is a transfer to a bank account</property-description>").optional(),
  "operationType": z.enum(["PIX","TED"]).describe("Transfer modality. If not informed and the receiving institution is a Pix participant, the transfer is via Pix. Otherwise via TED.").optional(),
  "pixAddressKey": z.string().describe("Enter the Pix key if it is a transfer to a Pix key").optional(),
  "pixAddressKeyType": z.enum(["CPF","CNPJ","EMAIL","PHONE","EVP"]).describe("Enter the type of key if it is a transfer to a Pix key").optional(),
  "description": z.string().describe("Transfers via Pix allow description").optional(),
  "scheduleDate": z.string().date().describe("For scheduled transfers, if not informed, payment is instantaneous").optional(),
  "externalReference": z.string().describe("Transfer identifier in your system").optional(),
  "recurring": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `recurring` to the tool, first call the tool `expandSchema` with \"/properties/recurring\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Recurrence information. Only for Pix transfers</property-description>").optional()
}