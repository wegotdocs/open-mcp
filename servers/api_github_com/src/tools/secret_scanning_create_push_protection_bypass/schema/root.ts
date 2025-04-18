import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "reason": z.enum(["false_positive","used_in_tests","will_fix_later"]).describe("The reason for bypassing push protection."),
  "placeholder_id": z.string().describe("The ID of the push protection bypass placeholder. This value is returned on any push protected routes.")
}