import { z } from "zod"

export const inputParamsSchema = {
  "client_user_id": z.string().min(1).describe("A unique ID representing the end user. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`. It is currently used as a means of searching logs for the given user in the Plaid Dashboard."),
  "legal_name": z.string().describe("The user's full legal name, used for [micro-deposit based verification flows](https://plaid.com/docs/auth/coverage/). For a small number of customers on legacy flows, providing this field is required to enable micro-deposit-based flows. For all other customers, this field is optional. Providing the user's name in this field when using micro-deposit-based verification will streamline the end user experience, as the user will not be prompted to enter their name during the Link flow; Plaid will use the provided legal name instead.").optional(),
  "name": z.string().optional(),
  "phone_number": z.string().describe("The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. If supplied, will be used when applicable to prefill phone number fields in Link for the [returning user flow](https://www.plaid.com/docs/link/returning-user) and the [Identity Verification flow](https://www.plaid.com/docs/identity-verification).").optional(),
  "email_address": z.string().describe("The user's email address. Can be used to prefill Link fields when used with [Identity Verification](https://www.plaid.com/docs/identity-verification).").optional(),
  "date_of_birth": z.string().date().nullable().describe("To be provided in the format \"yyyy-mm-dd\". Can be used to prefill Link fields when used with Identity Verification.").optional(),
  "address": z.string().optional(),
  "id_number": z.string().optional()
}