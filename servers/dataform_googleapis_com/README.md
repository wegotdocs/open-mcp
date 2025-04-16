# @open-mcp/dataform_googleapis_com

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add dataform_googleapis_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add dataform_googleapis_com \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=...
```

### Other

```bash
npx @open-mcp/config add dataform_googleapis_com \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "dataform_googleapis_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/dataform_googleapis_com"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/dataform_googleapis_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/dataform_googleapis_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### dataform_projects_locations_repositories_workspaces_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace resource's name."),
  "force": z.boolean().describe("If set to true, any child resources of this repository will also be deleted. (Otherwise, the request will only succeed if the repository has no child resources.)").optional()
}
```

### dataform_projects_locations_repositories_workspaces_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace's name.")
}
```

### parameters_v1beta1_name_

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workflowconfigs_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Output only. The workflow config's name."),
  "updateMask": z.string().describe("Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.").optional(),
  "cronSchedule": z.string().describe("Optional. Optional schedule (in cron format) for automatic execution of this workflow config.").optional(),
  "invocationConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional. If left unset, a default InvocationConfig will be used.").optional(),
  "b_name": z.string().describe("Output only. The workflow config's name.").readonly().optional(),
  "recentScheduledExecutionRecords": z.array(z.object({ "errorStatus": z.object({ "code": z.number().int().describe("The status code, which should be an enum value of google.rpc.Code.").optional(), "details": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("A list of messages that carry the error details. There is a common set of message types for APIs to use.").optional(), "message": z.string().describe("A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.").optional() }).describe("The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.").optional(), "executionTime": z.string().describe("The timestamp of this execution attempt.").optional(), "workflowInvocation": z.string().describe("The name of the created workflow invocation, if one was successfully created. Must be in the format \`projects/*/locations/*/repositories/*/workflowInvocations/*\`.").optional() }).describe("A record of an attempt to create a workflow invocation for this workflow config.")).describe("Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of \`execution_time\`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.").readonly().optional(),
  "releaseConfig": z.string().describe("Required. The name of the release config whose release_compilation_result should be executed. Must be in the format \`projects/*/locations/*/repositories/*/releaseConfigs/*\`.").optional(),
  "timeZone": z.string().describe("Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.").optional()
}
```

### dataform_projects_locations_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("The resource that owns the locations collection, if applicable."),
  "filter": z.string().describe("A filter to narrow down results to a preferred subset. The filtering language accepts strings like \`\"displayName=tokyo\"\`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).").optional(),
  "pageSize": z.number().int().describe("The maximum number of results to return. If not set, the service selects a default.").optional(),
  "pageToken": z.string().describe("A page token received from the \`next_page_token\` field in the response. Send that page token to receive the subsequent page.").optional()
}
```

### parameters_v1beta1_name_locations

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v1beta1_name_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workflowinvocations_can

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workflow invocation resource's name.")
}
```

### parameters_v1beta1_name_commit

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_commit

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace's name."),
  "author": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRequired. The commit's author.").optional(),
  "commitMessage": z.string().describe("Optional. The commit's message.").optional(),
  "paths": z.array(z.string()).describe("Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed.").optional()
}
```

### dataform_projects_locations_repositories_workspaces_fetchfilegit

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace's name.")
}
```

### parameters_v1beta1_name_fetchfilegitstatuses

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_fetchgitahea

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace's name."),
  "remoteBranch": z.string().describe("Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used.").optional()
}
```

### parameters_v1beta1_name_fetchgitaheadbehind

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_fetchremotebranches

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The repository's name.")
}
```

### parameters_v1beta1_name_fetchremotebranches

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v1beta1_name_pull

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_pull

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace's name."),
  "author": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRequired. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace.").optional(),
  "remoteBranch": z.string().describe("Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used.").optional()
}
```

### parameters_v1beta1_name_push

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_push

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace's name."),
  "remoteBranch": z.string().describe("Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used.").optional()
}
```

### dataform_projects_locations_repositories_workflowinvocations_que

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workflow invocation's name."),
  "pageSize": z.number().int().describe("Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`QueryWorkflowInvocationActions\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`QueryWorkflowInvocationActions\` must match the call that provided the page token.").optional()
}
```

### parameters_v1beta1_name_query

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v1beta1_name_reset

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_reset

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("Required. The workspace's name."),
  "clean": z.boolean().describe("Optional. If set to true, untracked files will be deleted.").optional(),
  "paths": z.array(z.string()).describe("Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset.").optional()
}
```

### dataform_projects_locations_repositories_compilationresults_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to list compilation results. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "pageSize": z.number().int().describe("Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`ListCompilationResults\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`ListCompilationResults\` must match the call that provided the page token.").optional()
}
```

### parameters_v1beta1_parent_compilationresults

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_compilationresults_crea

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to create the compilation result. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "codeCompilationConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nImmutable. If set, fields of \`code_compilation_config\` override the default compilation settings that are specified in dataform.json.").optional(),
  "compilationErrors": z.array(z.object({ "actionTarget": z.object({ "database": z.string().describe("The action's database (Google Cloud project ID) .").optional(), "name": z.string().describe("The action's name, within \`database\` and \`schema\`.").optional(), "schema": z.string().describe("The action's schema (BigQuery dataset ID), within \`database\`.").optional() }).describe("Output only. The identifier of the action where this error occurred, if available.").readonly().optional(), "message": z.string().describe("Output only. The error's top level message.").readonly().optional(), "path": z.string().describe("Output only. The path of the file where this error occurred, if available, relative to the project root.").readonly().optional(), "stack": z.string().describe("Output only. The error's full stack trace.").readonly().optional() }).describe("An error encountered when attempting to compile a Dataform project.")).describe("Output only. Errors encountered during project compilation.").readonly().optional(),
  "dataformCoreVersion": z.string().describe("Output only. The version of \`@dataform/core\` that was used for compilation.").readonly().optional(),
  "gitCommitish": z.string().describe("Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: \`12ade345\` - a tag: \`tag1\` - a branch name: \`branch1\`").optional(),
  "name": z.string().describe("Output only. The compilation result's name.").readonly().optional(),
  "releaseConfig": z.string().describe("Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format \`projects/*/locations/*/repositories/*/releaseConfigs/*\`.").optional(),
  "resolvedGitCommitSha": z.string().describe("Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace.").readonly().optional(),
  "workspace": z.string().describe("Immutable. The name of the workspace to compile. Must be in the format \`projects/*/locations/*/repositories/*/workspaces/*\`.").optional()
}
```

### dataform_projects_locations_repositories_releaseconfigs_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to list release configs. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "pageSize": z.number().int().describe("Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`ListReleaseConfigs\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`ListReleaseConfigs\` must match the call that provided the page token.").optional()
}
```

### parameters_v1beta1_parent_releaseconfigs

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_releaseconfigs_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to create the release config. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "releaseConfigId": z.string().describe("Required. The ID to use for the release config, which will become the final component of the release config's resource name.").optional(),
  "codeCompilationConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional. If set, fields of \`code_compilation_config\` override the default compilation settings that are specified in dataform.json.").optional(),
  "cronSchedule": z.string().describe("Optional. Optional schedule (in cron format) for automatic creation of compilation results.").optional(),
  "gitCommitish": z.string().describe("Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: \`12ade345\` - a tag: \`tag1\` - a branch name: \`branch1\`").optional(),
  "name": z.string().describe("Output only. The release config's name.").readonly().optional(),
  "recentScheduledReleaseRecords": z.array(z.object({ "compilationResult": z.string().describe("The name of the created compilation result, if one was successfully created. Must be in the format \`projects/*/locations/*/repositories/*/compilationResults/*\`.").optional(), "errorStatus": z.object({ "code": z.number().int().describe("The status code, which should be an enum value of google.rpc.Code.").optional(), "details": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("A list of messages that carry the error details. There is a common set of message types for APIs to use.").optional(), "message": z.string().describe("A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.").optional() }).describe("The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.").optional(), "releaseTime": z.string().describe("The timestamp of this release attempt.").optional() }).describe("A record of an attempt to create a compilation result for this release config.")).describe("Output only. Records of the 10 most recent scheduled release attempts, ordered in in descending order of \`release_time\`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule.").readonly().optional(),
  "releaseCompilationResult": z.string().describe("Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is created from this release config, or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format \`projects/*/locations/*/repositories/*/compilationResults/*\`.").optional(),
  "timeZone": z.string().describe("Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.").optional()
}
```

### dataform_projects_locations_repositories_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The location in which to list repositories. Must be in the format \`projects/*/locations/*\`."),
  "filter": z.string().describe("Optional. Filter for the returned list.").optional(),
  "orderBy": z.string().describe("Optional. This field only supports ordering by \`name\`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the \`name\` field.").optional(),
  "pageSize": z.number().int().describe("Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`ListRepositories\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`ListRepositories\` must match the call that provided the page token.").optional()
}
```

### parameters_v1beta1_parent_repositories

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The location in which to create the repository. Must be in the format \`projects/*/locations/*\`."),
  "repositoryId": z.string().describe("Required. The ID to use for the repository, which will become the final component of the repository's resource name.").optional(),
  "gitRemoteSettings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional. If set, configures this repository to be linked to a Git remote.").optional(),
  "name": z.string().describe("Output only. The repository's name.").readonly().optional(),
  "npmrcEnvironmentVariablesSecretVersion": z.string().describe("Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format \`projects/*/secrets/*/versions/*\`. The file itself must be in a JSON format.").optional(),
  "workspaceCompilationOverrides": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional. If set, fields of \`workspace_compilation_overrides\` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for \`WorkspaceCompilationOverrides\` for more information.").optional()
}
```

### dataform_projects_locations_repositories_workflowconfigs_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to list workflow configs. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "pageSize": z.number().int().describe("Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`ListWorkflowConfigs\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`ListWorkflowConfigs\` must match the call that provided the page token.").optional()
}
```

### parameters_v1beta1_parent_workflowconfigs

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workflowconfigs_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to create the workflow config. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "workflowConfigId": z.string().describe("Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name.").optional(),
  "cronSchedule": z.string().describe("Optional. Optional schedule (in cron format) for automatic execution of this workflow config.").optional(),
  "invocationConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional. If left unset, a default InvocationConfig will be used.").optional(),
  "name": z.string().describe("Output only. The workflow config's name.").readonly().optional(),
  "recentScheduledExecutionRecords": z.array(z.object({ "errorStatus": z.object({ "code": z.number().int().describe("The status code, which should be an enum value of google.rpc.Code.").optional(), "details": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("A list of messages that carry the error details. There is a common set of message types for APIs to use.").optional(), "message": z.string().describe("A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.").optional() }).describe("The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.").optional(), "executionTime": z.string().describe("The timestamp of this execution attempt.").optional(), "workflowInvocation": z.string().describe("The name of the created workflow invocation, if one was successfully created. Must be in the format \`projects/*/locations/*/repositories/*/workflowInvocations/*\`.").optional() }).describe("A record of an attempt to create a workflow invocation for this workflow config.")).describe("Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of \`execution_time\`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.").readonly().optional(),
  "releaseConfig": z.string().describe("Required. The name of the release config whose release_compilation_result should be executed. Must be in the format \`projects/*/locations/*/repositories/*/releaseConfigs/*\`.").optional(),
  "timeZone": z.string().describe("Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.").optional()
}
```

### dataform_projects_locations_repositories_workflowinvocations_lis

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The parent resource of the WorkflowInvocation type. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "filter": z.string().describe("Optional. Filter for the returned list.").optional(),
  "orderBy": z.string().describe("Optional. This field only supports ordering by \`name\`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the \`name\` field.").optional(),
  "pageSize": z.number().int().describe("Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`ListWorkflowInvocations\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`ListWorkflowInvocations\` must match the call that provided the page token.").optional()
}
```

### parameters_v1beta1_parent_workflowinvocations

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workflowinvocations_cre

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to create the workflow invocation. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "compilationResult": z.string().describe("Immutable. The name of the compilation result to compile. Must be in the format \`projects/*/locations/*/repositories/*/compilationResults/*\`.").optional(),
  "invocationConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nImmutable. If left unset, a default InvocationConfig will be used.").optional(),
  "invocationTiming": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOutput only. This workflow invocation's timing details.").optional(),
  "name": z.string().describe("Output only. The workflow invocation's name.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","RUNNING","SUCCEEDED","CANCELLED","FAILED","CANCELING"]).describe("Output only. This workflow invocation's current state.").readonly().optional(),
  "workflowConfig": z.string().describe("Immutable. The name of the workflow config to invoke. Must be in the format \`projects/*/locations/*/repositories/*/workflowConfigs/*\`.").optional()
}
```

### dataform_projects_locations_repositories_workspaces_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to list workspaces. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "filter": z.string().describe("Optional. Filter for the returned list.").optional(),
  "orderBy": z.string().describe("Optional. This field only supports ordering by \`name\`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the \`name\` field.").optional(),
  "pageSize": z.number().int().describe("Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`ListWorkspaces\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`ListWorkspaces\` must match the call that provided the page token.").optional()
}
```

### parameters_v1beta1_parent_workspaces

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Required. The repository in which to create the workspace. Must be in the format \`projects/*/locations/*/repositories/*\`."),
  "workspaceId": z.string().describe("Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.").optional(),
  "name": z.string().describe("Output only. The workspace's name.").readonly().optional()
}
```

### dataform_projects_locations_repositories_workspaces_getiampolicy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "resource": z.string().describe("REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field."),
  "options.requestedPolicyVersion": z.number().int().describe("Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).").optional()
}
```

### parameters_v1beta1_resource_getiampolicy

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v1beta1_resource_setiampolicy

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_setiampolicy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "resource": z.string().describe("REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field."),
  "policy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nREQUIRED: The complete policy to be applied to the \`resource\`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.").optional()
}
```

### parameters_v1beta1_resource_testiampermissions

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_testiampermi

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "resource": z.string().describe("REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field."),
  "permissions": z.array(z.string()).describe("The set of permissions to check for the \`resource\`. Permissions with wildcards (such as \`*\` or \`storage.*\`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).").optional()
}
```

### dataform_projects_locations_repositories_workspaces_fetchfiledif

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "path": z.string().describe("Required. The file's full path including filename, relative to the workspace root.").optional()
}
```

### parameters_v1beta1_workspace_fetchfilediff

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v1beta1_workspace_installnpmpackages

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_installnpmpa

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name.")
}
```

### parameters_v1beta1_workspace_makedirectory

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_makedirector

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "path": z.string().describe("Required. The directory's full path including directory name, relative to the workspace root.").optional()
}
```

### parameters_v1beta1_workspace_movedirectory

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_movedirector

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "newPath": z.string().describe("Required. The new path for the directory including directory name, rooted at workspace root.").optional(),
  "path": z.string().describe("Required. The directory's full path including directory name, relative to the workspace root.").optional()
}
```

### parameters_v1beta1_workspace_movefile

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_movefile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "newPath": z.string().describe("Required. The file's new path including filename, relative to the workspace root.").optional(),
  "path": z.string().describe("Required. The file's full path including filename, relative to the workspace root.").optional()
}
```

### dataform_projects_locations_repositories_workspaces_querydirecto

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "pageSize": z.number().int().describe("Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous \`QueryDirectoryContents\` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to \`QueryDirectoryContents\` must match the call that provided the page token.").optional(),
  "path": z.string().describe("Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used.").optional()
}
```

### parameters_v1beta1_workspace_querydirectorycontents

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_readfile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "path": z.string().describe("Required. The file's full path including filename, relative to the workspace root.").optional()
}
```

### parameters_v1beta1_workspace_readfile

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v1beta1_workspace_removedirectory

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_removedirect

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "path": z.string().describe("Required. The directory's full path including directory name, relative to the workspace root.").optional()
}
```

### parameters_v1beta1_workspace_removefile

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_removefile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "path": z.string().describe("Required. The file's full path including filename, relative to the workspace root.").optional()
}
```

### parameters_v1beta1_workspace_writefile

**Environment variables**



**Input schema**

```ts
{}
```

### dataform_projects_locations_repositories_workspaces_writefile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Required. The workspace's name."),
  "contents": z.string().describe("Required. The file's contents.").optional(),
  "path": z.string().describe("Required. The file.").optional()
}
```
