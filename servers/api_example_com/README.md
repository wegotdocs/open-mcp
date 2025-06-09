# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
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

### healthcheckcontroller_healthcheckpint

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### healthcheckcontroller_healthcheckpint

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### formdraftscontroller_savedraft

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `ntx-draft-name` (string)

### formdraftscontroller_updatedraft

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `draftId` (string)
- `ntx-draft-name` (string)

### formdraftscontroller_getlatestdraft

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### formdraftscontroller_getdraft

**Environment variables**

No environment variables required

**Input schema**

- `draftId` (string)

### formdraftscontroller_deletedraft

**Environment variables**

No environment variables required

**Input schema**

- `draftId` (string)

### formdraftscontroller_getalldrafts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### formdefinitioncontroller_publish

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `versionId` (string)
- `versionLabel` (string)
- `versionComments` (object)
- `name` (string)
- `description` (object)
- `allowAnonymous` (boolean)
- `formDefinition` (string)
- `useInMobileAndMyNintex` (boolean)
- `userId` (string)
- `formType` (string)
- `parentId` (string)
- `assignedUse` (string)
- `ntx-correlation-id` (string)
- `Authorization` (string)

### formdefinitioncontroller_getforms

**Environment variables**

No environment variables required

**Input schema**

- `formTypes` (string)
- `includeMyNintexFormsOnly` (boolean)
- `Authorization` (string)

### formdefinitioncontroller_draft

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `versionId` (string)
- `versionLabel` (string)
- `versionComments` (object)
- `name` (string)
- `description` (object)
- `allowAnonymous` (boolean)
- `formDefinition` (string)
- `useInMobileAndMyNintex` (boolean)
- `userId` (string)
- `formType` (string)
- `parentId` (string)
- `ntx-correlation-id` (string)
- `Authorization` (string)

### formdefinitioncontroller_deactivate

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `userId` (string)
- `formType` (string)

### formdefinitioncontroller_delete

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `userId` (string)
- `formType` (string)
- `ntx-correlation-id` (string)

### formdefinitioncontroller_getform

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### formdefinitioncontroller_deletedraft

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `userId` (string)
- `formType` (string)

### formdefinitioncontroller_getformdraft

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### formdefinitioncontroller_activate

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `userId` (string)
- `formType` (string)

### formdefinitioncontroller_getformmetadata

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### formdefinitioncontroller_getformversions

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `version` (string)
- `Authorization` (string)

### formdefinitioncontroller_restoreformversions

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `version` (string)
- `draft` (string)
- `Authorization` (string)

### mobileformdefinitioncontroller_getmobileform

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Authorization` (string)

### submissioncontroller_submit

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_submit

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_submit

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_submit

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_submitv2

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_submitv2

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_edit

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `itemId` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_submitmobile

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### submissioncontroller_submitmobile

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `tenantId` (string)
- `ntx-tenancy` (string)
- `ntx-upload-session-id` (string)
- `ntx-captcha` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-test-workflow` (string)
- `Authorization` (string)

### subscribecontroller_subscribe

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### subscribecontroller_unsubscribe

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### subscribecontroller_subscribev2

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `notificationUrl` (string)
- `providerName` (string)
- `config` (object)
- `Authorization` (string)

### subscribecontroller_unsubscribev2

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### formsettingscontroller_publish

**Environment variables**

No environment variables required

**Input schema**

- `enableCustomCss` (boolean)
- `allowAnonymous` (boolean)
- `enablePlugins` (boolean)
- `enableAuthTaskFormsRedirect` (boolean)
- `localizationAndTranslation` (string)
- `enableAiFormGenerator` (boolean)
- `enableFormPdfConverter` (boolean)
- `Authorization` (string)

### formsettingscontroller_partialupdate

**Environment variables**

No environment variables required

**Input schema**

- `enableCustomCss` (boolean)
- `allowAnonymous` (boolean)
- `enablePlugins` (boolean)
- `enableAuthTaskFormsRedirect` (boolean)
- `localizationAndTranslation` (string)
- `enableAiFormGenerator` (boolean)
- `enableFormPdfConverter` (boolean)
- `Authorization` (string)

### formsettingscontroller_getformsettings

**Environment variables**

No environment variables required

**Input schema**

- `Authorization` (string)

### formpluginscontroller_create

**Environment variables**

No environment variables required

**Input schema**

- `Authorization` (string)

### formpluginscontroller_get

**Environment variables**

No environment variables required

**Input schema**

- `isDisabled` (boolean)
- `Authorization` (string)

### formpluginscontroller_uploadfile

**Environment variables**

No environment variables required

**Input schema**

- `Authorization` (string)

### formpluginscontroller_partialupdate

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### formpluginscontroller_delete

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Authorization` (string)

### formpluginscontroller_getstaticfile

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### formtranslationcontroller_translate

**Environment variables**

No environment variables required

**Input schema**

- `payload` (array)
- `Authorization` (string)

### formtranslationcontroller_getlanguageslist

**Environment variables**

No environment variables required

**Input schema**

- `lang` (string)
- `Authorization` (string)

### mobiledeltacontroller_getmobiledelta

**Environment variables**

- `API_KEY`

**Input schema**

- `formTypes` (string)
- `User-Agent` (string)
- `ntx-client` (string)
- `ntx-correlation-id` (string)
- `ntx-operation-id` (string)
- `ntx-nm-last-modified` (string)
- `ntx-tenancy` (string)
- `Authorization` (string)

### runtimecontroller_gettabledata

**Environment variables**

No environment variables required

**Input schema**

- `formId` (string)
- `tableId` (string)
- `formType` (string)

### runtimecontroller_queryformdatasource

**Environment variables**

No environment variables required

**Input schema**

- `formId` (string)
- `datasourceId` (string)
- `formType` (string)
