# @open-mcp/dss-test

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "dss-test": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/dss-test@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/dss-test@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add dss-test \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add dss-test \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add dss-test \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "dss-test": {
      "command": "npx",
      "args": ["-y", "@open-mcp/dss-test"],
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

### deleteinstance

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_api_v1_instance_instanceidurlparam_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createinstitution

**Environment variables**

- `API_KEY`

**Input schema**

- `Id` (string)
- `LegacyId` (string)
- `Name` (string)
- `Tenant` (string)

### getinstitutionbyid

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_api_v1_institution_institutionidurlparam_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getinstitutions

**Environment variables**

- `API_KEY`

**Input schema**

- `institutionsLegacy[]` (array)
- `search` (string)
- `tenant` (string)
- `aet` (string)

### deleteseries

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_api_v1_series_seriesidurlparam_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getstorageareas

**Environment variables**

- `API_KEY`

**Input schema**

- `search` (string)

### getstudies

**Environment variables**

- `API_KEY`

**Input schema**

- `institution` (string)
- `institutions[]` (array)
- `institutionLegacy` (string)
- `institutionsLegacy[]` (array)
- `dicomStudyId` (string)
- `patientId` (string)
- `modality` (string)
- `source` (string)
- `studyInstanceUid` (string)
- `limit` (integer)
- `page` (integer)
- `date` (string)
- `accessionNumber` (string)
- `storageArea[]` (array)

### getstudiesviewerurl

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_api_v1_studies_viewer_url

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### deletestudy

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_api_v1_studies_studyidurlparam_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getstudy

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_api_v1_study_studyidurlparam_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getstudyviewerurl

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_api_v1_study_studyidurlparam_viewer_url

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createtransfer

**Environment variables**

- `API_KEY`

**Input schema**

- `filesSize` (integer)
- `id` (string)
- `institutionId` (string)
- `numOfFiles` (integer)
- `source` (string)
- `storageArea` (string)

### createtransferresource

**Environment variables**

- `API_KEY`

**Input schema**

- `location` (string)
- `transferId` (string)

### parameters_api_v1_transfer_transferidurlparam_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updatetransfer

**Environment variables**

- `API_KEY`

**Input schema**

- `filesSize` (integer)
- `numOfFiles` (integer)
- `status` (string)

### parameters_api_v1_transfer_transferidurlparam_resource

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createresourcefortransfer

**Environment variables**

- `API_KEY`

**Input schema**

- `institutionId` (string)
- `path` (string)

### parameters_api_v1_transfer_transferidurlparam_upload_url

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getuploadurlfortransfer

**Environment variables**

- `API_KEY`

**Input schema**

- `fileName` (string)

### gettransfers

**Environment variables**

- `API_KEY`

**Input schema**

- `status` (string)
- `statuses[]` (array)
- `institution_id` (string)

### getthumbnailimage

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_thumbnails_studyidurlparam_seriesidurlparam_filenameu

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters
