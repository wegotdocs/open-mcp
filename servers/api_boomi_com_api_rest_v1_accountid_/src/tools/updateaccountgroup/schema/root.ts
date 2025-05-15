import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the account group."),
  "Resources": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Resources` to the tool, first call the tool `expandSchema` with \"/properties/Resources\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "accountId": z.string().describe("The ID of the primary account under which the account group exists.").optional(),
  "autoSubscribeAlertLevel": z.enum(["none","info","warning","error"]).describe("The severity level of email alerts sent to member users in the account group.").optional(),
  "defaultGroup": z.boolean().describe("true — The account group is All Accounts, which the system creates automatically.<br /> false — The account group is not All Accounts.").optional(),
  "b_id": z.string().describe("The ID of the account group.").optional(),
  "name": z.string().describe("The name of the account group as displayed on the **Account Information** tab of the **Setup** page.").optional()
}