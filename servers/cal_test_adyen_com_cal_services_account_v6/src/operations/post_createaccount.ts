import { z } from "zod"

export const toolName = `post_createaccount`
export const toolDescription = `Create an account`
export const baseUrl = `https://cal-test.adyen.com/cal/services/Account/v6`
export const path = `/createAccount`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "X-API-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-API-Key"
  }
]

export const inputParams = z.object({ "body": z.object({ "accountHolderCode": z.string().describe("The code of Account Holder under which to create the account."), "bankAccountUUID": z.string().describe("The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.").optional(), "description": z.string().describe("A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.").optional(), "metadata": z.record(z.string()).describe("A set of key and value pairs for general use by the merchant.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.").optional(), "payoutMethodCode": z.string().describe("The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.").optional(), "payoutSchedule": z.enum(["BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT","DAILY","DAILY_AU","DAILY_EU","DAILY_SG","DAILY_US","HOLD","MONTHLY","WEEKLY","WEEKLY_MON_TO_FRI_AU","WEEKLY_MON_TO_FRI_EU","WEEKLY_MON_TO_FRI_US","WEEKLY_ON_TUE_FRI_MIDNIGHT","WEEKLY_SUN_TO_THU_AU","WEEKLY_SUN_TO_THU_US"]).describe("The payout schedule for the account.\n\nPossible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.\n> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.").optional(), "payoutScheduleReason": z.string().describe("The reason for the payout schedule choice.\n> This field is required when the `payoutSchedule` parameter is set to `HOLD`.").optional(), "payoutSpeed": z.enum(["INSTANT","SAME_DAY","STANDARD"]).describe("Speed at which payouts for this account are processed.\n\nPossible values: `STANDARD` (default), `SAME_DAY`.") }).strict().optional() }).shape