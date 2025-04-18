import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "title": z.string().describe("A name for the key.").optional(),
  "key": z.string().describe("The contents of the key."),
  "read_only": z.boolean().describe("If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.  \n  \nDeploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see \"[Repository permission levels for an organization](https://docs.github.com/articles/repository-permission-levels-for-an-organization/)\" and \"[Permission levels for a user account repository](https://docs.github.com/articles/permission-levels-for-a-user-account-repository/).\"").optional()
}