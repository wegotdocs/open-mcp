import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "language": z.enum(["cpp","csharp","go","java","javascript","python","ruby","rust","swift"]).describe("The language targeted by the CodeQL query"),
  "query_pack": z.string().describe("A Base64-encoded tarball containing a CodeQL query and all its dependencies"),
  "repositories": z.array(z.string()).describe("List of repository names (in the form `owner/repo-name`) to run the query against. Precisely one property from `repositories`, `repository_lists` and `repository_owners` is required.").optional(),
  "repository_lists": z.array(z.string()).max(1).describe("List of repository lists to run the query against. Precisely one property from `repositories`, `repository_lists` and `repository_owners` is required.").optional(),
  "repository_owners": z.array(z.string()).max(1).describe("List of organization or user names whose repositories the query should be run against. Precisely one property from `repositories`, `repository_lists` and `repository_owners` is required.").optional()
}