import { z } from "zod"

export const inputParamsSchema = {
  "bank": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bank` to the tool, first call the tool `expandSchema` with \"/properties/bankAccount/properties/bank\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Details of the bank account to which the transfer will be made</property-description>").optional(),
  "accountName": z.string().describe("Bank account name").optional(),
  "ownerName": z.string().describe("Name of bank account owner"),
  "ownerBirthDate": z.string().date().describe("Account owner's date of birth. Only when the bank account does not belong to the same CPF or CNPJ as the Asaas account.").optional(),
  "cpfCnpj": z.string().describe("CPF or CNPJ of the bank account owner"),
  "agency": z.string().describe("Non-digit agency number"),
  "account": z.string().describe("Non-digit bank account number"),
  "accountDigit": z.string().describe("Bank account digit"),
  "bankAccountType": z.enum(["CONTA_CORRENTE","CONTA_POUPANCA"]).describe("Account type").optional(),
  "ispb": z.string().describe("Identifier in the Brazilian Payment System").optional()
}