import { z } from "zod"

export const inputParams = {
  "remoteUrl": z.string().describe("The git repository's remote origin url").optional(),
  "commitAuthorName": z.string().describe("The name of the author of the commit").optional(),
  "commitMessage": z.string().describe("The commit message").optional(),
  "commitRef": z.string().describe("The branch on which the commit was made").optional(),
  "commitSha": z.string().describe("The hash of the commit").optional(),
  "dirty": z.boolean().describe("Whether or not there have been modifications to the working tree since the latest commit").optional()
}