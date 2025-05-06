import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "title": z.string().describe("The title of the pull request.").optional(),
  "body": z.string().describe("The contents of the pull request.").optional(),
  "state": z.enum(["open","closed"]).describe("State of this Pull Request. Either `open` or `closed`.").optional(),
  "base": z.string().describe("The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.").optional(),
  "maintainer_can_modify": z.boolean().describe("Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.").optional()
}