import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "vcs_url": z.string().describe("The URL of the originating repository."),
  "vcs": z.enum(["subversion","git","mercurial","tfvc"]).describe("The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.").optional(),
  "vcs_username": z.string().describe("If authentication is required, the username to provide to `vcs_url`.").optional(),
  "vcs_password": z.string().describe("If authentication is required, the password to provide to `vcs_url`.").optional(),
  "tfvc_project": z.string().describe("For a tfvc import, the name of the project that is being imported.").optional()
}