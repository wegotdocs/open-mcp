import { z } from "zod"

export const inputParamsSchema = {
  "parent": z.string().describe("Required. The location in which to create the repository. Must be in the format `projects/*/locations/*`."),
  "repositoryId": z.string().describe("Required. The ID to use for the repository, which will become the final component of the repository's resource name.").optional(),
  "gitRemoteSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `gitRemoteSettings` to the tool, first call the tool `expandSchema` with \"/properties/gitRemoteSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional. If set, configures this repository to be linked to a Git remote.</property-description>").optional(),
  "name": z.string().describe("Output only. The repository's name.").readonly().optional(),
  "npmrcEnvironmentVariablesSecretVersion": z.string().describe("Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.").optional(),
  "workspaceCompilationOverrides": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `workspaceCompilationOverrides` to the tool, first call the tool `expandSchema` with \"/properties/workspaceCompilationOverrides\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information.</property-description>").optional()
}