# @open-mcp/www_wrike_com_app_wrike_v2_web

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "www_wrike_com_app_wrike_v2_web": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/www_wrike_com_app_wrike_v2_web@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/www_wrike_com_app_wrike_v2_web@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add www_wrike_com_app_wrike_v2_web \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add www_wrike_com_app_wrike_v2_web \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add www_wrike_com_app_wrike_v2_web \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "www_wrike_com_app_wrike_v2_web": {
      "command": "npx",
      "args": ["-y", "@open-mcp/www_wrike_com_app_wrike_v2_web"],
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

### finddatabases

**Environment variables**

- `API_KEY`

**Input schema**

- `Pagination` (object)
- `databaseIds` (array)

### databasepost

**Environment variables**

- `API_KEY`

**Input schema**

- `requestId` (string)
- `title` (string)
- `databaseRecordName` (string)
- `parentFolderId` (string)

### finddatabase

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)

### deletedatabase

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)

### updatedatabase

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `title` (string)
- `parentFolderId` (string)

### findfolderdatabases

**Environment variables**

- `API_KEY`

**Input schema**

- `folderId` (string)
- `Pagination` (object)
- `databaseIds` (array)

### findfields

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `Pagination` (object)
- `fieldIds` (array)

### createfield

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)

### findfield

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `fieldId` (string)

### deletefield

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `fieldId` (string)

### updatefield

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `fieldId` (string)

### findfolders

**Environment variables**

- `API_KEY`

**Input schema**

- `Pagination` (object)
- `folderIds` (array)
- `withDescendants` (boolean)

### folderspost

**Environment variables**

- `API_KEY`

**Input schema**

- `requestId` (string)
- `title` (string)
- `parentFolderId` (string)

### findfolder

**Environment variables**

- `API_KEY`

**Input schema**

- `folderId` (string)

### deletefolder

**Environment variables**

- `API_KEY`

**Input schema**

- `folderId` (string)

### updatefolder

**Environment variables**

- `API_KEY`

**Input schema**

- `folderId` (string)
- `title` (string)
- `parentFolderId` (string)

### findsubfolders

**Environment variables**

- `API_KEY`

**Input schema**

- `folderId` (string)
- `Pagination` (object)
- `folderIds` (array)

### findrecords

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `Pagination` (object)
- `recordIds` (array)
- `filter` (string)
- `searchQuery` (string)
- `fieldIds` (array)

### createrecords

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `fieldIds` (array)
- `requestId` (string)
- `data` (array)

### deleterecords

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `recordIds` (array)

### updaterecords

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `fieldIds` (array)

### findrecord

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `recordId` (string)
- `fieldIds` (array)

### updaterecord

**Environment variables**

- `API_KEY`

**Input schema**

- `databaseId` (string)
- `recordId` (string)
- `fieldIds` (array)
- `title` (string)
- `fieldValues` (object)

### getrootfolder

**Environment variables**

- `API_KEY`

**Input schema**

- `spaceId` (string)
