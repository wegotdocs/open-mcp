import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Required. The workspace's name."),
  "author": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `author` to the tool, first call the tool `expandSchema` with \"/properties/author\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Required. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace.</property-description>").optional(),
  "remoteBranch": z.string().describe("Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used.").optional()
}