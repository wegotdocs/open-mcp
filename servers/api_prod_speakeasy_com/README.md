# @open-mcp/api_prod_speakeasy_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_prod_speakeasy_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_prod_speakeasy_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_prod_speakeasy_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
X_API_KEY='...'
X_WORKSPACE_IDENTIFIER='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_prod_speakeasy_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --X_API_KEY=$X_API_KEY \
  --X_WORKSPACE_IDENTIFIER=$X_WORKSPACE_IDENTIFIER
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_prod_speakeasy_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --X_API_KEY=$X_API_KEY \
  --X_WORKSPACE_IDENTIFIER=$X_WORKSPACE_IDENTIFIER
```

### Other

```bash
npx @open-mcp/config add api_prod_speakeasy_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --X_API_KEY=$X_API_KEY \
  --X_WORKSPACE_IDENTIFIER=$X_WORKSPACE_IDENTIFIER
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_prod_speakeasy_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_prod_speakeasy_com"],
      "env": {"API_KEY":"...","X_API_KEY":"...","X_WORKSPACE_IDENTIFIER":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `X_API_KEY` - gets sent to the API provider
- `X_WORKSPACE_IDENTIFIER` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### validateapikey

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getuser

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getaccesstoken

**Environment variables**

No environment variables required

**Input schema**

- `workspace_id` (string)

### getcodesamples

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `registry_url` (string)
- `operation_ids` (array)
- `method_paths` (array)
- `languages` (array)

### generatecodesamplepreview

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### generatecodesamplepreviewasync

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getcodesamplepreviewasync

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `jobID` (string)

### getgithubsetupstate

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `org` (string)
- `repo` (string)
- `generate_gen_lock_id` (string)

### checkgithubaccess

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `org` (string)
- `repo` (string)

### linkgithubaccess

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `installation_id` (string)
- `github_org` (string)
- `github_oidc_token` (string)

### githubcheckpublishingprs

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `generate_gen_lock_id` (string)
- `org` (string)
- `repo` (string)

### githubcheckpublishingsecrets

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `generate_gen_lock_id` (string)

### githubstorepublishingsecrets

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `generate_gen_lock_id` (string)
- `secrets` (object)

### githubconfigurecodesamples

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `org` (string)
- `repo` (string)
- `targetName` (string)

### githubconfiguremintlifyrepo

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `org` (string)
- `repo` (string)
- `subdirectory` (string)
- `input` (string)
- `overlays` (array)

### githubconfiguretarget

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `org` (string)
- `repo_name` (string)

### githubtriggeraction

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `org` (string)
- `repo_name` (string)
- `target_name` (string)
- `gen_lock_id` (string)
- `set_version` (string)
- `force` (boolean)

### getgithubaction

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `targetName` (string)
- `org` (string)
- `repo` (string)

### getorganizations

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### createorganization

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `id` (string)
- `name` (string)
- `slug` (string)
- `account_type` (string)
- `telemetry_disabled` (boolean)
- `created_at` (string)
- `updated_at` (string)
- `free_trial_expiry` (string)
- `sso_connection_id` (string)
- `sso_activated` (boolean)
- `internal` (boolean)

### parameters_v1_organization_organizationid_

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getorganization

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### createfreetrial

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getorganizationusage

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### createbillingaddons

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `add_ons` (array)

### getbillingaddons

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_organization_add_ons_add_on_

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### deletebillingaddon

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getpublishingtoken

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### createpublishingtoken

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `target_id` (string)
- `target_resource` (string)
- `valid_until` (string)
- `token_name` (string)

### getpublishingtokenbyid

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `tokenID` (string)

### updatepublishingtokenexpiration

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `tokenID` (string)
- `valid_until` (string)
- `token_name` (string)

### deletepublishingtoken

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `tokenID` (string)

### parameters_v1_publishing_tokens_tokenid_target

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getpublishingtokentargetbyid

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_publishing_tokens_tokenid_metadata

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getpublishingtokenpublicmetadata

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspaces

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspacebycontext

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### createworkspace

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `created_at` (string)
- `id` (string)
- `name` (string)
- `organization_id` (string)
- `slug` (string)
- `inactive` (boolean)
- `updated_at` (string)
- `verified` (boolean)

### parameters_v1_workspace_workspace_id_

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspace

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_workspace_workspace_id_details

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### updateworkspacedetails

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `created_at` (string)
- `id` (string)
- `name` (string)
- `organization_id` (string)
- `slug` (string)
- `inactive` (boolean)
- `updated_at` (string)
- `verified` (boolean)

### parameters_v1_workspace_workspace_id_settings

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspacesettings

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### updateworkspacesettings

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `workspace_id` (string)
- `webhook_url` (string)
- `created_at` (string)
- `updated_at` (string)

### parameters_v1_workspace_workspace_id_events

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### searchworkspaceevents

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `source_revision_digest` (string)
- `lint_report_digest` (string)
- `openapi_diff_report_digest` (string)
- `interaction_type` (string)
- `generate_gen_lock_id` (string)
- `execution_id` (string)
- `success` (boolean)
- `limit` (integer)

### postworkspaceevents

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_workspace_workspace_id_team

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspaceteam

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_workspace_workspace_id_team_email_email_

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### grantuseraccesstoworkspace

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_workspace_workspace_id_team_userid_

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### revokeuseraccesstoworkspace

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_workspace_workspace_id_tokens

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspacetokens

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### createworkspacetoken

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `id` (string)
- `name` (string)
- `workspace_id` (string)
- `alg` (string)
- `key` (string)
- `last_used` (string)
- `created_at` (string)
- `created_by` (string)
- `created_by_name` (string)
- `created_by_photo_url` (string)
- `email` (string)

### parameters_v1_workspace_workspace_id_tokens_tokenid_

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### deleteworkspacetoken

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### setworkspacefeatureflags

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `feature_flags` (array)

### parameters_v1_workspace_workspace_id_feature_flags

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspacefeatureflags

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspaceeventsbytarget

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `workspace_id` (string)
- `target_id` (string)
- `after_created_at` (string)

### getworkspaceaccess

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `genLockId` (string)
- `targetType` (string)
- `passive` (boolean)

### parameters_v1_workspace_events_targets

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspacetargets

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### parameters_v1_workspace_workspace_id_events_targets

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getworkspacetargetsdeprecated

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### uploadreport

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getlintingreportsignedurl

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `documentChecksum` (string)

### getchangesreportsignedurl

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `documentChecksum` (string)

### suggestopenapi

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `x-session-id` (string)

### suggest

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `oas_summary` (object)
- `suggestion_type` (string)
- `diagnostics` (array)
- `x-session-id` (string)

### suggestitems

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `prompt` (string)
- `items` (array)

### suggestopenapiregistry

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)
- `revision_reference` (string)
- `oas_summary` (object)
- `suggestion_type` (string)
- `diagnostics` (array)
- `x-session-id` (string)

### summary_v1_schema_store

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### getschemastoreitem

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `id` (string)

### createschemastoreitem

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `spec` (string)
- `packageName` (string)
- `sdkClassname` (string)
- `format` (string)

### create

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `url` (string)

### preflight

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)

### getnamespaces

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

No input parameters

### archivenamespace

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)
- `archived` (boolean)

### getrevisions

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)
- `next_page_token` (string)

### gettags

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)

### posttags

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)
- `revision_digest` (string)
- `tags` (array)

### setvisibility

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)
- `public` (boolean)

### listremotesources

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `namespace_name` (string)

### createremotesource

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `inputs` (array)
- `overlays` (array)
- `output` (other)

### getmanifest

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `organization_slug` (string)
- `workspace_slug` (string)
- `namespace_name` (string)
- `revision_reference` (string)
- `Accept` (string)

### getblob

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `organization_slug` (string)
- `workspace_slug` (string)
- `namespace_name` (string)
- `digest` (string)

### ignoresubscriptionnamespace

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `subscriptionID` (string)
- `namespaceName` (string)

### activatesubscriptionnamespace

**Environment variables**

- `API_KEY`
- `X_API_KEY`
- `X_WORKSPACE_IDENTIFIER`

**Input schema**

- `subscriptionID` (string)
- `namespaceName` (string)
