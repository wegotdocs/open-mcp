import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The `account_id` value obtained from the `onSuccess` callback in Link"),
  "processor": z.enum(["dwolla","galileo","modern_treasury","ocrolus","vesta","drivewealth","vopay","achq","check","checkbook","circle","sila_money","rize","svb_api","unit","wyre","lithic","alpaca","astra","moov","treasury_prime","marqeta","checkout","solid","highnote","gemini","apex_clearing","gusto","adyen","atomic","i2c","wepay","riskified","utb","adp_roll","fortress_trust","bond","bakkt","teal","zero_hash","taba_pay","knot","sardine","alloy","finix","nuvei","layer","boom","paynote","stake","wedbush","esusu","ansa","scribeup","straddle","loanpro"]).describe("The processor you are integrating with.")
}