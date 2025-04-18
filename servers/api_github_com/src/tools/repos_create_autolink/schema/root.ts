import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "key_prefix": z.string().describe("This prefix appended by certain characters will generate a link any time it is found in an issue, pull request, or commit."),
  "url_template": z.string().describe("The URL must contain `<num>` for the reference number. `<num>` matches different characters depending on the value of `is_alphanumeric`."),
  "is_alphanumeric": z.boolean().describe("Whether this autolink reference matches alphanumeric characters. If true, the `<num>` parameter of the `url_template` matches alphanumeric characters `A-Z` (case insensitive), `0-9`, and `-`. If false, this autolink reference only matches numeric characters.").optional()
}