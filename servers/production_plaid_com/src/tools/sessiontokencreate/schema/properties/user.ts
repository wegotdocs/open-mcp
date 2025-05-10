import { z } from "zod"

export const inputParamsSchema = {
  "client_user_id": z.string().describe("A unique ID representing the end user. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`. It is currently used as a means of searching logs for the given user in the Plaid Dashboard.").optional()
}