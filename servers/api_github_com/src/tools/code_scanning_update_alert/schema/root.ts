import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "state": z.enum(["open","dismissed"]).describe("Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`."),
  "dismissed_reason": z.enum(["false positive","won't fix","used in tests"]).nullable().describe("**Required when the state is dismissed.** The reason for dismissing or closing the alert.").optional(),
  "dismissed_comment": z.string().max(280).nullable().describe("The dismissal comment associated with the dismissal of the alert.").optional(),
  "create_request": z.boolean().describe("If `true`, attempt to create an alert dismissal request.").optional()
}