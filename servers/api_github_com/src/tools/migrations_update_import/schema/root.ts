import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "vcs_username": z.string().describe("The username to provide to the originating repository.").optional(),
  "vcs_password": z.string().describe("The password to provide to the originating repository.").optional(),
  "vcs": z.enum(["subversion","tfvc","git","mercurial"]).describe("The type of version control system you are migrating from.").optional(),
  "tfvc_project": z.string().describe("For a tfvc import, the name of the project that is being imported.").optional()
}