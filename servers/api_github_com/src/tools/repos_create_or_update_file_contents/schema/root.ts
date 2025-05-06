import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "path": z.string().describe("path parameter"),
  "message": z.string().describe("The commit message."),
  "content": z.string().describe("The new file content, using Base64 encoding."),
  "sha": z.string().describe("**Required if you are updating a file**. The blob SHA of the file being replaced.").optional(),
  "branch": z.string().describe("The branch name. Default: the repository’s default branch.").optional(),
  "committer": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `committer` to the tool, first call the tool `expandSchema` with \"/properties/committer\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The person that committed the file. Default: the authenticated user.</property-description>").optional(),
  "author": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `author` to the tool, first call the tool `expandSchema` with \"/properties/author\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.</property-description>").optional()
}