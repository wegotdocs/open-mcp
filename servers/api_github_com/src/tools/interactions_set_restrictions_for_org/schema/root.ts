import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "limit": z.enum(["existing_users","contributors_only","collaborators_only"]).describe("The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect."),
  "expiry": z.enum(["one_day","three_days","one_week","one_month","six_months"]).describe("The duration of the interaction restriction. Default: `one_day`.").optional()
}