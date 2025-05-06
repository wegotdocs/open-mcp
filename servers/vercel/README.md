# @open-mcp/vercel

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "vercel": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/vercel@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/vercel@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add vercel \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add vercel \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add vercel \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "vercel": {
      "command": "npx",
      "args": ["-y", "@open-mcp/vercel"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### readaccessgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)

### updateaccessgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
- `name` (string)
- `projects` (array)
- `membersToAdd` (array)
- `membersToRemove` (array)

### deleteaccessgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)

### listaccessgroupmembers

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `limit` (integer)
- `next` (string)
- `search` (string)
- `teamId` (string)
- `slug` (string)

### listaccessgroups

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `search` (string)
- `membersLimit` (integer)
- `projectsLimit` (integer)
- `limit` (integer)
- `next` (string)
- `teamId` (string)
- `slug` (string)

### createaccessgroup

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `name` (string)
- `projects` (array)
- `membersToAdd` (array)

### listaccessgroupprojects

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `limit` (integer)
- `next` (string)
- `teamId` (string)
- `slug` (string)

### createaccessgroupproject

**Environment variables**

- `API_KEY`

**Input schema**

- `accessGroupIdOrName` (string)
- `teamId` (string)
- `slug` (string)
- `projectId` (string)
- `role` (string)

### readaccessgroupproject

**Environment variables**

- `API_KEY`

**Input schema**

- `accessGroupIdOrName` (string)
- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### updateaccessgroupproject

**Environment variables**

- `API_KEY`

**Input schema**

- `accessGroupIdOrName` (string)
- `projectId` (string)
- `teamId` (string)
- `slug` (string)
- `role` (string)

### deleteaccessgroupproject

**Environment variables**

- `API_KEY`

**Input schema**

- `accessGroupIdOrName` (string)
- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### recordevents

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `x-artifact-client-ci` (string)
- `x-artifact-client-interactive` (integer)

### status

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)

### uploadartifact

**Environment variables**

- `API_KEY`

**Input schema**

- `hash` (string)
- `teamId` (string)
- `slug` (string)
- `Content-Length` (number)
- `x-artifact-duration` (number)
- `x-artifact-client-ci` (string)
- `x-artifact-client-interactive` (integer)
- `x-artifact-tag` (string)

### downloadartifact

**Environment variables**

- `API_KEY`

**Input schema**

- `hash` (string)
- `teamId` (string)
- `slug` (string)
- `x-artifact-client-ci` (string)
- `x-artifact-client-interactive` (integer)

### artifactexists

**Environment variables**

- `API_KEY`

**Input schema**

- `hash` (string)
- `teamId` (string)
- `slug` (string)

### artifactquery

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `hashes` (array)

### createcheck

**Environment variables**

- `API_KEY`

**Input schema**

- `deploymentId` (string)
- `teamId` (string)
- `slug` (string)
- `name` (string)
- `path` (string)
- `blocking` (boolean)
- `detailsUrl` (string)
- `externalId` (string)
- `rerequestable` (boolean)

### getallchecks

**Environment variables**

- `API_KEY`

**Input schema**

- `deploymentId` (string)
- `teamId` (string)
- `slug` (string)

### getcheck

**Environment variables**

- `API_KEY`

**Input schema**

- `deploymentId` (string)
- `checkId` (string)
- `teamId` (string)
- `slug` (string)

### updatecheck

**Environment variables**

- `API_KEY`

**Input schema**

- `deploymentId` (string)
- `checkId` (string)
- `teamId` (string)
- `slug` (string)
- `name` (string)
- `path` (string)
- `status` (other)
- `conclusion` (other)
- `detailsUrl` (string)
- `output` (object)
- `externalId` (string)

### rerequestcheck

**Environment variables**

- `API_KEY`

**Input schema**

- `deploymentId` (string)
- `checkId` (string)
- `teamId` (string)
- `slug` (string)

### delete_data_cache_purge_all

**Environment variables**

No environment variables required

**Input schema**

- `projectIdOrName` (string)

### patch_data_cache_billing_settings

**Environment variables**

No environment variables required

**Input schema**

- `excessBillingEnabled` (boolean)

### updateprojectdatacache

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)
- `disabled` (boolean)

### getdeploymentevents

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrUrl` (string)
- `direction` (string)
- `follow` (number)
- `limit` (number)
- `name` (string)
- `since` (number)
- `until` (number)
- `statusCode` (other)
- `delimiter` (number)
- `builds` (number)
- `teamId` (string)
- `slug` (string)

### update_integration_deployment_action

**Environment variables**

- `API_KEY`

**Input schema**

- `deploymentId` (string)
- `integrationConfigurationId` (string)
- `resourceId` (string)
- `action` (string)
- `status` (string)
- `statusText` (string)
- `outcomes` (array)

### getdeployment

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrUrl` (string)
- `withGitRepoInfo` (string)
- `teamId` (string)
- `slug` (string)

### createdeployment

**Environment variables**

- `API_KEY`

**Input schema**

- `forceNew` (other)
- `skipAutoDetectionConfirmation` (other)
- `teamId` (string)
- `slug` (string)
- `customEnvironmentSlugOrId` (string)
- `deploymentId` (string)
- `files` (array)
- `gitMetadata` (object)
- `gitSource` (other)
- `meta` (object)
- `monorepoManager` (string)
- `name` (string)
- `project` (string)
- `projectSettings` (object)
- `target` (string)
- `withLatestCommit` (boolean)

### canceldeployment

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### buydomain

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `name` (string)
- `expectedPrice` (number)
- `renew` (boolean)
- `country` (string)
- `orgName` (string)
- `firstName` (string)
- `lastName` (string)
- `address1` (string)
- `city` (string)
- `state` (string)
- `postalCode` (string)
- `phone` (string)
- `email` (string)

### checkdomainprice

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `type` (string)
- `teamId` (string)
- `slug` (string)

### checkdomainstatus

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `teamId` (string)
- `slug` (string)

### getrecords

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (string)
- `limit` (string)
- `since` (string)
- `until` (string)
- `teamId` (string)
- `slug` (string)

### createrecord

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (string)
- `teamId` (string)
- `slug` (string)
- `type` (string)

### updaterecord

**Environment variables**

- `API_KEY`

**Input schema**

- `recordId` (string)
- `teamId` (string)
- `slug` (string)
- `additionalProperties` (other)
- `name` (string)
- `value` (string)
- `type` (string)
- `ttl` (integer)
- `mxPriority` (integer)
- `srv` (object)
- `https` (object)
- `comment` (string)

### removerecord

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (string)
- `recordId` (string)
- `teamId` (string)
- `slug` (string)

### getdomaintransfer

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)

### getdomainconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (string)
- `strict` (other)
- `teamId` (string)
- `slug` (string)

### getdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (string)
- `teamId` (string)
- `slug` (string)

### getdomains

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (number)
- `since` (number)
- `until` (number)
- `teamId` (string)
- `slug` (string)

### createortransferdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `method` (string)

### patchdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (string)
- `teamId` (string)
- `slug` (string)

### deletedomain

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (string)
- `teamId` (string)
- `slug` (string)

### deleteconfigurablelogdrain

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### getedgeconfigs

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)

### createedgeconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `b_slug` (string)
- `items` (object)

### getedgeconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)

### updateedgeconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)
- `b_slug` (string)

### deleteedgeconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)

### getedgeconfigitems

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)

### patchedgeconfigitems

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `dryRun` (string)
- `teamId` (string)
- `slug` (string)
- `items` (array)
- `definition` (other)

### getedgeconfigschema

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)

### patchedgeconfigschema

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `dryRun` (string)
- `teamId` (string)
- `slug` (string)
- `definition` (other)

### deleteedgeconfigschema

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)

### getedgeconfigitem

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `edgeConfigItemKey` (string)
- `teamId` (string)
- `slug` (string)

### getedgeconfigtokens

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)

### deleteedgeconfigtokens

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)
- `tokens` (array)

### getedgeconfigtoken

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `token` (string)
- `teamId` (string)
- `slug` (string)

### createedgeconfigtoken

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `teamId` (string)
- `slug` (string)
- `label` (string)

### getedgeconfigbackup

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `edgeConfigBackupVersionId` (string)
- `teamId` (string)
- `slug` (string)

### getedgeconfigbackups

**Environment variables**

- `API_KEY`

**Input schema**

- `edgeConfigId` (string)
- `next` (string)
- `limit` (number)
- `metadata` (string)
- `teamId` (string)
- `slug` (string)

### listuserevents

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (number)
- `since` (string)
- `until` (string)
- `types` (string)
- `userId` (string)
- `principalId` (string)
- `withPayload` (string)
- `teamId` (string)
- `slug` (string)

### get_account_info

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)

### get_member

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `memberId` (string)

### create_event

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `event` (other)

### submit_billing_data

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `timestamp` (string)
- `eod` (string)
- `period` (object)
- `billing` (other)
- `usage` (array)

### submit_invoice

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `externalId` (string)
- `invoiceDate` (string)
- `memo` (string)
- `period` (object)
- `items` (array)
- `discounts` (array)
- `test` (object)

### get_invoice

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `invoiceId` (string)

### update_invoice

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `invoiceId` (string)
- `action` (string)
- `reason` (string)
- `total` (string)

### submit_prepayment_balances

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `timestamp` (string)
- `balances` (array)

### update_resource_secrets

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `integrationProductIdOrSlug` (string)
- `resourceId` (string)
- `secrets` (array)
- `partial` (boolean)

### update_resource_secrets_by_id

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `resourceId` (string)
- `secrets` (array)
- `partial` (boolean)

### import_resource

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `resourceId` (string)
- `productId` (string)
- `name` (string)
- `status` (string)
- `metadata` (object)
- `billingPlan` (object)
- `notification` (object)
- `secrets` (array)

### getconfigurations

**Environment variables**

- `API_KEY`

**Input schema**

- `view` (string)
- `installationType` (string)
- `integrationIdOrSlug` (string)
- `teamId` (string)
- `slug` (string)

### getconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### deleteconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### exchange_sso_token

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)
- `state` (string)
- `client_id` (string)
- `client_secret` (string)
- `redirect_uri` (string)
- `grant_type` (string)

### getintegrationlogdrains

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)

### createlogdrain

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `name` (string)
- `projectIds` (array)
- `secret` (string)
- `deliveryFormat` (other)
- `url` (string)
- `sources` (array)
- `headers` (object)
- `environments` (array)

### deleteintegrationlogdrain

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### post_v1_installations_integrationconfigurationid_resources_resou

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `resourceId` (string)
- `items` (array)

### patch_v1_installations_integrationconfigurationid_resources_reso

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `resourceId` (string)
- `itemId` (string)
- `slug` (string)
- `origin` (string)
- `name` (string)
- `category` (string)
- `description` (string)
- `isArchived` (boolean)
- `createdAt` (number)
- `updatedAt` (number)

### delete_v1_installations_integrationconfigurationid_resources_res

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `resourceId` (string)
- `itemId` (string)

### head_v1_installations_integrationconfigurationid_resources_resou

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `resourceId` (string)

### put_v1_installations_integrationconfigurationid_resources_resour

**Environment variables**

- `API_KEY`

**Input schema**

- `integrationConfigurationId` (string)
- `resourceId` (string)
- `data` (object)

### getprojectmembers

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `limit` (integer)
- `since` (integer)
- `until` (integer)
- `search` (string)
- `teamId` (string)
- `slug` (string)

### addprojectmember

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
- `uid` (string)
- `username` (string)
- `email` (string)
- `role` (string)

### removeprojectmember

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `uid` (string)
- `teamId` (string)
- `slug` (string)

### getprojects

**Environment variables**

- `API_KEY`

**Input schema**

- `from` (string)
- `gitForkProtection` (string)
- `limit` (string)
- `search` (string)
- `repo` (string)
- `repoId` (string)
- `repoUrl` (string)
- `excludeRepos` (string)
- `edgeConfigId` (string)
- `edgeConfigTokenId` (string)
- `deprecated` (boolean)
- `teamId` (string)
- `slug` (string)

### createproject

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `enablePreviewFeedback` (boolean)
- `enableProductionFeedback` (boolean)
- `buildCommand` (string)
- `commandForIgnoringBuildStep` (string)
- `devCommand` (string)
- `environmentVariables` (array)
- `framework` (other)
- `gitRepository` (object)
- `installCommand` (string)
- `name` (string)
- `outputDirectory` (string)
- `publicSource` (boolean)
- `rootDirectory` (string)
- `serverlessFunctionRegion` (string)
- `serverlessFunctionZeroConfigFailover` (other)
- `oidcTokenConfig` (object)
- `enableAffectedProjectsDeployments` (boolean)

### getproject

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (other)
- `teamId` (string)
- `slug` (string)

### updateproject

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
- `autoExposeSystemEnvs` (boolean)
- `autoAssignCustomDomains` (boolean)
- `autoAssignCustomDomainsUpdatedBy` (string)
- `buildCommand` (string)
- `commandForIgnoringBuildStep` (string)
- `customerSupportCodeVisibility` (boolean)
- `devCommand` (string)
- `directoryListing` (boolean)
- `framework` (string)
- `gitForkProtection` (boolean)
- `gitLFS` (boolean)
- `installCommand` (string)
- `name` (string)
- `nodeVersion` (string)
- `outputDirectory` (string)
- `previewDeploymentsDisabled` (boolean)
- `publicSource` (boolean)
- `rootDirectory` (string)
- `serverlessFunctionRegion` (string)
- `serverlessFunctionZeroConfigFailover` (other)
- `skewProtectionBoundaryAt` (integer)
- `skewProtectionMaxAge` (integer)
- `sourceFilesOutsideRootDirectory` (boolean)
- `enablePreviewFeedback` (boolean)
- `enableProductionFeedback` (boolean)
- `enableAffectedProjectsDeployments` (boolean)
- `oidcTokenConfig` (object)
- `passwordProtection` (object)
- `ssoProtection` (object)
- `trustedIps` (object)
- `optionsAllowlist` (object)
- `connectConfigurations` (array)

### deleteproject

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)

### createcustomenvironment

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
- `b_slug` (string)
- `description` (string)
- `branchMatcher` (object)
- `copyEnvVarsFrom` (string)

### get_v9_projects_idorname_custom_environments

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `gitBranch` (string)
- `teamId` (string)
- `slug` (string)

### getcustomenvironment

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `environmentSlugOrId` (string)
- `teamId` (string)
- `slug` (string)

### updatecustomenvironment

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `environmentSlugOrId` (string)
- `teamId` (string)
- `slug` (string)
- `b_slug` (string)
- `description` (string)
- `branchMatcher` (object)

### removecustomenvironment

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `environmentSlugOrId` (string)
- `teamId` (string)
- `slug` (string)
- `deleteUnassignedEnvironmentVariables` (boolean)

### getprojectdomains

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (other)
- `production` (other)
- `target` (string)
- `customEnvironmentId` (string)
- `gitBranch` (string)
- `redirects` (other)
- `redirect` (string)
- `verified` (other)
- `limit` (number)
- `since` (number)
- `until` (number)
- `order` (other)
- `teamId` (string)
- `slug` (string)

### getprojectdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `domain` (string)
- `teamId` (string)
- `slug` (string)

### updateprojectdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `domain` (string)
- `teamId` (string)
- `slug` (string)
- `gitBranch` (string)
- `redirect` (string)
- `redirectStatusCode` (integer)

### removeprojectdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `domain` (string)
- `teamId` (string)
- `slug` (string)

### addprojectdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
- `name` (string)
- `gitBranch` (string)
- `customEnvironmentId` (string)
- `redirect` (string)
- `redirectStatusCode` (integer)

### moveprojectdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `domain` (string)
- `teamId` (string)
- `slug` (string)
- `projectId` (other)

### verifyprojectdomain

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `domain` (string)
- `teamId` (string)
- `slug` (string)

### filterprojectenvs

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `gitBranch` (string)
- `decrypt` (string)
- `source` (string)
- `customEnvironmentId` (string)
- `customEnvironmentSlug` (string)
- `teamId` (string)
- `slug` (string)

### createprojectenv

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `upsert` (string)
- `teamId` (string)
- `slug` (string)

### getprojectenv

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `id` (string)
- `teamId` (string)
- `slug` (string)

### removeprojectenv

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `id` (string)
- `customEnvironmentId` (string)
- `teamId` (string)
- `slug` (string)

### editprojectenv

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `id` (string)
- `teamId` (string)
- `slug` (string)
- `key` (string)
- `target` (array)
- `gitBranch` (string)
- `type` (string)
- `value` (string)
- `customEnvironmentIds` (array)
- `comment` (string)

### createprojecttransferrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
- `callbackUrl` (string)
- `callbackSecret` (string)

### acceptprojecttransferrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `code` (string)
- `teamId` (string)
- `slug` (string)
- `newProjectName` (string)
- `paidFeatures` (object)

### updateprojectprotectionbypass

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
- `revoke` (object)
- `generate` (object)

### requestpromote

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `deploymentId` (string)
- `teamId` (string)
- `slug` (string)

### listpromotealiases

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `limit` (number)
- `since` (number)
- `until` (number)
- `failedOnly` (boolean)
- `teamId` (string)
- `slug` (string)

### pauseproject

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### unpauseproject

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### updateattackchallengemode

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `projectId` (string)
- `attackModeEnabled` (boolean)
- `attackModeActiveUntil` (number)

### putfirewallconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)
- `firewallEnabled` (boolean)
- `managedRules` (object)
- `crs` (object)
- `rules` (array)
- `ips` (array)

### updatefirewallconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### getfirewallconfig

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### getactiveattackstatus

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### getbypassip

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `limit` (number)
- `sourceIp` (string)
- `domain` (string)
- `projectScope` (boolean)
- `offset` (string)
- `teamId` (string)
- `slug` (string)

### addbypassip

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)
- `domain` (string)
- `projectScope` (boolean)
- `sourceIp` (string)
- `allSources` (boolean)
- `ttl` (number)
- `note` (string)

### removebypassip

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)
- `domain` (string)
- `projectScope` (boolean)
- `sourceIp` (string)
- `allSources` (boolean)
- `note` (string)

### getteammembers

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (number)
- `since` (number)
- `until` (number)
- `search` (string)
- `role` (string)
- `excludeProject` (string)
- `eligibleMembersForProjectId` (string)

### inviteusertoteam

**Environment variables**

- `API_KEY`

**Input schema**

- `uid` (string)
- `email` (string)
- `role` (string)
- `projects` (array)

### requestaccesstoteam

**Environment variables**

- `API_KEY`

**Input schema**

- `joinedFrom` (object)

### getteamaccessrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `userId` (string)

### jointeam

**Environment variables**

- `API_KEY`

**Input schema**

- `inviteCode` (string)

### updateteammember

**Environment variables**

- `API_KEY`

**Input schema**

- `uid` (string)
- `confirmed` (boolean)
- `role` (string)
- `projects` (array)
- `joinedFrom` (object)

### removeteammember

**Environment variables**

- `API_KEY`

**Input schema**

- `uid` (string)
- `newDefaultTeamId` (string)

### getteam

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)

### patchteam

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `avatar` (string)
- `description` (string)
- `emailDomain` (string)
- `name` (string)
- `previewDeploymentSuffix` (string)
- `regenerateInviteCode` (boolean)
- `saml` (object)
- `b_slug` (string)
- `enablePreviewFeedback` (string)
- `enableProductionFeedback` (string)
- `sensitiveEnvironmentVariablePolicy` (string)
- `remoteCaching` (object)
- `hideIpAddresses` (boolean)
- `hideIpAddressesInLogDrains` (boolean)

### getteams

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (number)
- `since` (number)
- `until` (number)

### createteam

**Environment variables**

- `API_KEY`

**Input schema**

- `slug` (string)
- `name` (string)
- `attribution` (object)

### deleteteam

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `newDefaultTeamId` (string)
- `slug` (string)
- `reasons` (array)

### deleteteaminvitecode

**Environment variables**

- `API_KEY`

**Input schema**

- `inviteId` (string)

### uploadfile

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `Content-Length` (number)
- `x-vercel-digest` (string)
- `x-now-digest` (string)
- `x-now-size` (number)

### listauthtokens

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createauthtoken

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `name` (string)
- `expiresAt` (number)

### getauthtoken

**Environment variables**

- `API_KEY`

**Input schema**

- `tokenId` (string)

### deleteauthtoken

**Environment variables**

- `API_KEY`

**Input schema**

- `tokenId` (string)

### getauthuser

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### requestdelete

**Environment variables**

- `API_KEY`

**Input schema**

- `reasons` (array)

### createwebhook

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `url` (string)
- `events` (array)
- `projectIds` (array)

### getwebhooks

**Environment variables**

- `API_KEY`

**Input schema**

- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### getwebhook

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### deletewebhook

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### listdeploymentaliases

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### assignalias

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (other)
- `teamId` (string)
- `slug` (string)
- `alias` (string)
- `redirect` (string)

### listaliases

**Environment variables**

- `API_KEY`

**Input schema**

- `domain` (other)
- `from` (number)
- `limit` (number)
- `projectId` (string)
- `since` (number)
- `until` (number)
- `rollbackDeploymentId` (string)
- `teamId` (string)
- `slug` (string)

### getalias

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrAlias` (string)
- `from` (number)
- `projectId` (string)
- `since` (number)
- `until` (number)
- `teamId` (string)
- `slug` (string)

### deletealias

**Environment variables**

- `API_KEY`

**Input schema**

- `aliasId` (other)
- `teamId` (string)
- `slug` (string)

### patch_aliases_id_protection_bypass

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### get_certs

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getcertbyid

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### removecert

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### issuecert

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `cns` (array)

### uploadcert

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `ca` (string)
- `key` (string)
- `cert` (string)
- `skipValidation` (boolean)

### listdeploymentfiles

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `teamId` (string)
- `slug` (string)

### getdeploymentfilecontents

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `fileId` (string)
- `path` (string)
- `teamId` (string)
- `slug` (string)

### getdeployments

**Environment variables**

- `API_KEY`

**Input schema**

- `app` (string)
- `from` (number)
- `limit` (number)
- `projectId` (string)
- `target` (string)
- `to` (number)
- `users` (string)
- `since` (number)
- `until` (number)
- `state` (string)
- `rollbackCandidate` (boolean)
- `branch` (string)
- `sha` (string)
- `teamId` (string)
- `slug` (string)

### deletedeployment

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `url` (string)
- `teamId` (string)
- `slug` (string)

### getsecrets

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `projectId` (string)
- `teamId` (string)
- `slug` (string)

### createsecret

**Environment variables**

- `API_KEY`

**Input schema**

- `teamId` (string)
- `slug` (string)
- `name` (string)
- `value` (string)
- `decryptable` (boolean)

### renamesecret

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `teamId` (string)
- `slug` (string)
- `b_name` (string)

### getsecret

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `decrypt` (string)
- `teamId` (string)
- `slug` (string)

### deletesecret

**Environment variables**

- `API_KEY`

**Input schema**

- `idOrName` (string)
- `teamId` (string)
- `slug` (string)
