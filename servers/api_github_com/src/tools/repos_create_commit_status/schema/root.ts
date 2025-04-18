import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "sha": z.string(),
  "state": z.enum(["error","failure","pending","success"]).describe("The state of the status."),
  "target_url": z.string().nullable().describe("The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.  \nFor example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:  \n`http://ci.example.com/user/repo/build/sha`").optional(),
  "description": z.string().nullable().describe("A short description of the status.").optional(),
  "context": z.string().describe("A string label to differentiate this status from the status of other systems. This field is case-insensitive.").optional()
}