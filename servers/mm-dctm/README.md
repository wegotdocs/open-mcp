# @open-mcp/mm-dctm

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "mm-dctm": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/mm-dctm@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/mm-dctm@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
DOCUMENTUM_CLIENT_TOKEN='...'
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add mm-dctm \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --DOCUMENTUM_CLIENT_TOKEN=$DOCUMENTUM_CLIENT_TOKEN \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add mm-dctm \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --DOCUMENTUM_CLIENT_TOKEN=$DOCUMENTUM_CLIENT_TOKEN \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add mm-dctm \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --DOCUMENTUM_CLIENT_TOKEN=$DOCUMENTUM_CLIENT_TOKEN \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "mm-dctm": {
      "command": "npx",
      "args": ["-y", "@open-mcp/mm-dctm"],
      "env": {"API_KEY":"...","DOCUMENTUM_CLIENT_TOKEN":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `DOCUMENTUM_CLIENT_TOKEN` - gets sent to the API provider
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getrepositories

**Environment variables**

No environment variables required

**Input schema**

- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getrepository

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `links` (boolean)
- `include-domains` (string)
- `Accept` (string)

### getacls

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createacl

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getacl

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updateacl

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteacl

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `force` (string)

### getaclassociations

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getarchivedcontents

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `object-id` (string)
- `include-children` (string)
- `binding-label` (string)
- `include-broken` (string)
- `depth` (integer)
- `format` (string)

### updatearchivedcontent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `all-contents` (string)
- `format` (string)
- `Content-Type` (string)

### getaspecttypes

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getaspecttype

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `aspectTypeName` (string)
- `view` (string)
- `links` (boolean)
- `locale` (string)
- `Accept` (string)

### getauditpolicies

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createauditpolicy

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### getauditpolicy

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updateauditpolicy

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### deleteauditpolicy

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### getaudittrails

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getaudittrail

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### deleteaudittrail

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `trace` (string)

### getavailableauditevents

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `object-id` (string)
- `object-type` (string)
- `links` (boolean)
- `Accept` (string)

### getbatchcapabilities

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `links` (boolean)
- `Accept` (string)

### updatebatch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getcabinets

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `object-type` (string)
- `Accept` (string)

### createcabinet

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getcabinet

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `check-subscription` (string)
- `Accept` (string)

### updatecabinet

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletecabinet

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `del-non-empty` (string)
- `del-all-links` (string)

### getwordsuggestions

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `links` (boolean)
- `suggestion-view` (string)
- `word` (string)
- `Accept` (string)

### getsynonymcategories

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getsynonyms

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `links` (boolean)
- `category` (string)
- `word` (string)
- `Accept` (string)

### getcheckedoutobjects

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `checked-out-by` (string)
- `user-name` (string)
- `include-all-versions` (string)
- `Accept` (string)

### getcurrentuser

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getcurrentuserpreferences

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createcurrentuserpreference

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getcurrentuserpreference

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `clientCode` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updatecurrentuserpreference

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `clientCode` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### deletecurrentuserpreference

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `clientCode` (string)
- `Accept` (string)

### getdars

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createdar

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### getdar

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getdocument

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `check-subscription` (string)
- `Accept` (string)

### updatedocument

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletedocument

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `del-version` (integer)
- `del-vd-all` (string)

### getrelateddocs

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `links` (boolean)
- `Accept` (string)

### getrelatedsme

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `links` (boolean)
- `Accept` (string)

### getsignificantterms

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `links` (boolean)
- `doc-ids` (array)
- `Accept` (string)

### getfolderchilddocuments

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `folderId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `object-type` (string)
- `include-all-versions` (string)
- `hide-shared-parent` (string)
- `Accept` (string)

### createfolderchilddocument

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `folderId` (string)
- `require-dc-write` (string)
- `network-location` (string)
- `format` (string)
- `content-length` (string)
- `async` (string)
- `all-primary` (string)
- `modifier` (string)
- `content-charset` (string)
- `content-count` (integer)
- `require-ip-network-location` (string)
- `require-checksum` (Boolean)
- `Accept` (string)
- `Content-Type` (string)

### getfolderchildfolders

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `folderId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `object-type` (string)
- `hide-shared-parent` (string)
- `Accept` (string)

### createfolderchildfolder

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `folderId` (string)
- `Accept` (string)
- `Content-Type` (string)

### getfolderchildobjects

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `folderId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `object-type` (string)
- `include-all-versions` (string)
- `hide-shared-parent` (string)
- `Accept` (string)

### createfolderchildobject

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `folderId` (string)
- `require-dc-write` (string)
- `format` (string)
- `network-location` (string)
- `async` (string)
- `all-primary` (string)
- `content-length` (string)
- `modifier` (string)
- `content-charset` (string)
- `content-count` (integer)
- `require-ip-network-location` (string)
- `require-checksum` (Boolean)
- `Accept` (string)
- `Content-Type` (string)

### getfolder

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `check-subscription` (string)
- `Accept` (string)

### updatefolder

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletefolder

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `del-non-empty` (string)
- `del-all-links` (string)

### getchildfolderlinks

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `include-all-versions` (string)
- `Accept` (string)

### createchildfolderlink

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `Accept` (string)
- `Content-Type` (string)

### getchildfolderlink

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `parentFolderId` (string)
- `objectId` (string)
- `links` (boolean)
- `Accept` (string)

### deletechildfolderlink

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `parentFolderId` (string)
- `objectId` (string)

### getformats

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getformat

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `formatName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getgroups

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `user-name` (string)
- `group-name` (string)
- `recursive` (string)
- `Accept` (string)

### creategroup

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getgroup

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updategroup

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### deletegroup

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)

### getgroupmembergroups

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `recursive` (string)
- `Accept` (string)

### creategroupmembergroup

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletegroupmembergroup

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `memberName` (string)

### getgroupmemberusers

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `recursive` (string)
- `Accept` (string)

### creategroupmemberuser

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletegroupmemberuser

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `groupName` (string)
- `userName` (string)

### getinbox

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `inline` (boolean)
- `links` (boolean)
- `item-type` (integer)
- `Accept` (string)

### getinboxitem

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `links` (boolean)
- `Accept` (string)

### putinboxitem

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `action` (string)
- `delegate-user` (string)
- `repeat-users` (string)
- `signoff-password` (string)
- `activity` (string)
- `assign-performers` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteinboxitem

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)

### getjobs

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createjob

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getjob

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updatejob

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### deletejob

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### getlifecycles

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `include-all-versions` (string)
- `object-id` (string)
- `object-type` (string)
- `Accept` (string)

### getlifecycle

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `links` (boolean)
- `Accept` (string)

### getmethods

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `method-category` (string)
- `Accept` (string)

### createmethod

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `method-category` (string)
- `Accept` (string)
- `Content-Type` (string)

### getmethod

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updatemethod

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `run-method` (string)
- `use-content` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletemethod

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `del-version` (integer)
- `del-vd-all` (string)

### getmodules

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getmodule

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `moduleId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updatemodule

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `moduleId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### getnetworklocations

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getnetworklocation

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `networkLocationIdentifier` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getobject

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `check-subscription` (string)
- `Accept` (string)

### createobject

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteobject

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `del-version` (integer)
- `del-non-empty` (string)
- `del-all-links` (string)
- `del-vd-all` (string)

### getcomments

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createcomment

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### getcomment

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `commentId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### deletecomment

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `commentId` (string)

### getcontentmedia

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `format` (string)
- `page` (integer)
- `modifier` (string)
- `require-checksum` (Boolean)

### getcontent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `format` (string)
- `page` (integer)
- `modifier` (string)
- `links` (boolean)
- `media-url-policy` (string)
- `network-location` (string)
- `require-checksum` (Boolean)
- `Accept` (string)

### updatecontent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `format` (string)
- `page` (integer)
- `modifier` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletecontent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `format` (string)
- `page` (integer)
- `modifier` (string)

### putmaterialization

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletematerialization

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### getobjectparent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updateobjectparent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `Accept` (string)
- `Content-Type` (string)

### putobjectsubscription

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteobjectsubscription

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### getobjectaspects

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `links` (boolean)
- `Accept` (string)

### updateobjectaspect

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteobjectaspect

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `aspectName` (string)

### getcontents

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `media-url-policy` (string)
- `network-location` (string)
- `require-checksum` (Boolean)
- `Accept` (string)

### createcontent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `format` (string)
- `page` (integer)
- `modifier` (string)
- `primary` (string)
- `content-length` (integer)
- `content-charset` (string)
- `overwrite` (string)
- `require-checksum` (Boolean)
- `Accept` (string)
- `Content-Type` (string)

### getobjectlightweightobjects

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createobjectlightweightobject

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `format` (string)
- `content-length` (integer)
- `content-charset` (string)
- `Accept` (string)
- `Content-Type` (string)

### getparentfolderlinks

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createparentfolderlink

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `Accept` (string)
- `Content-Type` (string)

### getparentfolderlink

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `parentFolderId` (string)
- `links` (boolean)
- `Accept` (string)

### putparentfolderlink

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `parentFolderId` (string)
- `include-all-versions` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteparentfolderlink

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `parentFolderId` (string)

### getpermissionset

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `links` (boolean)
- `Accept` (string)

### putpermissionset

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `Accept` (string)
- `Content-Type` (string)

### getpermissions

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `links` (boolean)
- `accessor` (string)
- `Accept` (string)

### getvirtualdocumentnodes

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `inline` (boolean)
- `links` (boolean)
- `binding-label` (string)
- `follow-assembly` (string)
- `include-broken` (string)
- `depth` (integer)
- `vdm-number` (string)
- `object-id` (string)
- `Accept` (string)

### createvirtualdocumentnode

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `Accept` (string)
- `Content-Type` (string)

### getcurrentversion

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `links` (boolean)
- `Accept` (string)

### getchecksum

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `Accept` (string)

### getqueuetasks

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `user-name` (string)
- `queue-names` (string)
- `filter-type` (string)
- `Accept` (string)

### getqueuetask

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `links` (boolean)
- `Accept` (string)

### putqueuetask

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `action` (string)
- `user-name` (string)
- `pulled` (string)
- `unsuspend-time` (string)
- `Accept` (string)
- `Content-Type` (string)

### getauditevents

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `audit-scope` (string)
- `object-id` (string)
- `object-type` (string)
- `Accept` (string)

### createauditevent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `view` (string)
- `links` (boolean)
- `audit-scope` (string)
- `object-id` (string)
- `object-type` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteauditevents

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `audit-scope` (string)
- `object-id` (string)
- `object-type` (string)

### getauditevent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### deleteauditevent

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### getrelationtypes

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getrelationtype

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `relationName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getrelations

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `related-object-id` (string)
- `related-object-role` (integer)
- `relation-name` (string)
- `Accept` (string)

### createrelation

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getrelation

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `relationId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### deleterelation

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `relationId` (string)

### getsavedsearches

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createsavedsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `query-locale` (string)
- `Accept` (string)
- `Content-Type` (string)

### getsearchtemplates

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createsearchtemplate

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `query-locale` (string)
- `Accept` (string)
- `Content-Type` (string)

### getvdsnapshots

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createvdsnapshot

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `view` (string)
- `links` (boolean)
- `binding-label` (string)
- `include-broken` (string)
- `frozen` (string)
- `Accept` (string)
- `Content-Type` (string)

### getvdsnapshotnodes

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `objectId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `inline` (boolean)
- `links` (boolean)
- `depth` (integer)
- `vdm-number` (string)
- `object-id` (string)
- `Accept` (string)

### getvdsnapshot

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `snapshotId` (string)
- `links` (boolean)
- `Accept` (string)

### deletevdsnapshot

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `snapshotId` (string)

### putvdsnapshotfrozen

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `snapshotId` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletevdsnapshotfrozen

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `snapshotId` (string)

### getsubscriptions

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getsupportedfacets

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `Accept` (string)

### gettypes

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `parent-type` (string)
- `recursive` (string)
- `inherited` (string)
- `locale` (string)
- `include-lifecycle` (string)
- `include-auditable-events` (string)
- `include-display-configs` (string)
- `include-mapping-tables` (string)
- `include-value-constraints` (string)
- `include-all` (string)
- `dml-view` (string)
- `Accept` (string)

### updatetypeassistvalue

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `typeName` (string)
- `view` (string)
- `links` (boolean)
- `included-properties` (string)
- `lifecycle-id` (string)
- `state` (string)
- `Accept` (string)
- `Content-Type` (string)

### gettype

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `type` (string)
- `inherited` (string)
- `locale` (string)
- `links` (boolean)
- `include-value-assist` (string)
- `include-lifecycle` (string)
- `include-auditable-events` (string)
- `include-display-configs` (string)
- `include-mapping-tables` (string)
- `include-value-constraints` (string)
- `include-all` (string)
- `scope-config` (string)
- `display-config` (string)
- `Accept` (string)

### getusers

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createuser

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `Accept` (string)
- `Content-Type` (string)

### getuser

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updateuser

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### deleteuser

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)

### getdefaultfolder

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getuserpermissionset

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)
- `links` (boolean)
- `Accept` (string)

### downloadprofileimage

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### uploadprofileimage

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### deleteprofileimage

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `userName` (string)

### getvirtualdocumentrelation

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `nodeId` (string)
- `links` (boolean)
- `object-id` (string)
- `Accept` (string)

### updatevirtualdocumentrelation

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `nodeId` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletevirtualdocumentrelation

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `nodeId` (string)

### getworkitem

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getworkflowtaskpackages

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getworkflowtaskpackage

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `index` (string)
- `links` (boolean)
- `Accept` (string)

### updateworkflowtaskpackage

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `index` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteworkflowtaskpackagedocuments

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `index` (string)

### deleteworkflowtaskpackagenote

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `itemId` (string)
- `index` (string)
- `noteId` (string)

### getworkqueues

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `user-name` (string)
- `Accept` (string)

### getworkqueue

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `queueId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getworkflowactivity

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `activityId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### getworkflowtemplates

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getworkflowtemplate

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `templateId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updateworkflowtemplate

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `templateId` (string)
- `Accept` (string)
- `Content-Type` (string)

### putworkflowtemplate

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `templateId` (string)
- `action` (string)
- `Accept` (string)
- `Content-Type` (string)

### getworkflowactivities

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `templateId` (string)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getworkflows

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createworkflow

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `quick-flow` (string)
- `Accept` (string)
- `Content-Type` (string)

### getworkflow

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `workflowId` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### putworkflow

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `workflowId` (string)
- `action` (string)
- `activity` (string)
- `supervisor` (string)
- `Accept` (string)
- `Content-Type` (string)

### getworkflowattachments

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `workflowId` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### createworkflowattachment

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `workflowId` (string)
- `Accept` (string)
- `Content-Type` (string)

### deleteworkflowattachment

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `workflowId` (string)
- `id` (string)

### getworkitems

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `workflowId` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `filter` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### getfederatedsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `start` (integer)
- `limit` (integer)
- `include-total` (boolean)
- `view` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `object-type` (string)
- `collections` (string)
- `facet` (string)
- `timezone` (string)
- `q` (string)
- `facet-value-constraints` (string)
- `facet-id-constraints` (string)
- `query-locale` (string)
- `Accept` (string)

### createfederatedsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `start` (integer)
- `limit` (integer)
- `include-total` (boolean)
- `inline` (boolean)
- `links` (boolean)
- `facet-id-constraints` (string)
- `Accept` (string)
- `Content-Type` (string)

### getsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `view` (string)
- `sort` (string)
- `inline` (boolean)
- `links` (boolean)
- `object-type` (string)
- `collections` (string)
- `facet` (string)
- `timezone` (string)
- `q` (string)
- `locations` (string)
- `facet-value-constraints` (string)
- `facet-id-constraints` (string)
- `query-locale` (string)
- `Accept` (string)

### createsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `inline` (boolean)
- `links` (boolean)
- `facet-id-constraints` (string)
- `Accept` (string)
- `Content-Type` (string)

### getsavedsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### updatesavedsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `query-locale` (string)
- `Accept` (string)
- `Content-Type` (string)

### deletesavedsearch

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### getsearchtemplate

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `view` (string)
- `links` (boolean)
- `Accept` (string)

### deletesearchtemplate

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### getsavedsearchexecution

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `inline` (boolean)
- `links` (boolean)
- `facet-id-constraints` (string)
- `query-locale` (string)
- `Accept` (string)

### createsearchtemplateexecution

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `inline` (boolean)
- `links` (boolean)
- `facet-id-constraints` (string)
- `query-locale` (string)
- `Accept` (string)
- `Content-Type` (string)

### getsavedsearchresults

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `inline` (boolean)
- `links` (boolean)
- `Accept` (string)

### putsavedsearchresult

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)
- `items-per-page` (integer)
- `page` (integer)
- `include-total` (boolean)
- `inline` (boolean)
- `links` (boolean)
- `max-results-count` (integer)
- `Accept` (string)
- `Content-Type` (string)

### deletesavedsearchresults

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `repositoryName` (string)
- `id` (string)

### createmail

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `otagtoken` (string)
- `async` (boolean)
- `Accept` (string)
- `Content-Type` (string)

### createnotification

**Environment variables**

- `API_KEY`
- `DOCUMENTUM_CLIENT_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `otagtoken` (string)
- `client-id` (string)
- `send-to-admins` (boolean)
- `Accept` (string)
- `Content-Type` (string)
