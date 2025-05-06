import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "state": z.enum(["open","resolved"]).describe("Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`."),
  "resolution": z.enum(["false_positive","wont_fix","revoked","used_in_tests"]).nullable().describe("**Required when the `state` is `resolved`.** The reason for resolving the alert.").optional(),
  "resolution_comment": z.string().nullable().describe("An optional comment when closing or reopening an alert. Cannot be updated or deleted.").optional()
}