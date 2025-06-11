# @open-mcp/app_getoutline_com_api

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "app_getoutline_com_api": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/app_getoutline_com_api@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/app_getoutline_com_api@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add app_getoutline_com_api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add app_getoutline_com_api \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add app_getoutline_com_api \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "app_getoutline_com_api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/app_getoutline_com_api"],
      "env": {"API_KEY":"...","OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### attachmentscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `documentId` (string)
- `contentType` (string)
- `size` (number)

### attachmentsredirect

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### attachmentsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### authinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### authconfig

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### collectionsinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### collectionsdocuments

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### collectionslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### collectionscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `description` (string)
- `permission` (string)
- `icon` (string)
- `color` (string)
- `sharing` (boolean)

### collectionsupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `permission` (string)
- `icon` (string)
- `color` (string)
- `sharing` (boolean)

### collectionsadduser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `userId` (string)
- `permission` (string)

### collectionsremoveuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `userId` (string)

### collectionsmemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### collectionsaddgroup

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `groupId` (string)
- `permission` (string)

### collectionsremovegroup

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `groupId` (string)

### collectionsgroupmemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### collectionsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### collectionsexport

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `format` (string)
- `id` (string)

### collectionsexportall

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `format` (string)

### commentscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `documentId` (string)
- `parentCommentId` (string)
- `data` (object)
- `text` (string)

### commentsinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `includeAnchorText` (boolean)

### commentsupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `data` (object)

### commentsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### commentslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### documentsinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `shareId` (string)

### documentsimport

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### documentsexport

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### documentslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### documentsdrafts

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### documentsviewed

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### documentsanswerquestion

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### documentssearch

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### documentscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `title` (string)
- `text` (string)
- `collectionId` (string)
- `parentDocumentId` (string)
- `templateId` (string)
- `template` (boolean)
- `publish` (boolean)

### documentsupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `title` (string)
- `text` (string)
- `append` (boolean)
- `publish` (boolean)
- `done` (boolean)

### documentstemplatize

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### documentsunpublish

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### documentsmove

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `collectionId` (string)
- `parentDocumentId` (string)

### documentsarchive

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### documentsrestore

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `revisionId` (string)

### documentsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `permanent` (boolean)

### documentsusers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `query` (string)

### documentsmemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `query` (string)

### documentsadduser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `userId` (string)
- `permission` (string)

### documentsremoveuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `userId` (string)

### eventslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### fileoperationsinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### fileoperationsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### fileoperationsredirect

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### fileoperationslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### groupsinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### groupslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### groupscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)

### groupsupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)

### groupsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### groupsmemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### groupsadduser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `userId` (string)

### groupsremoveuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `userId` (string)

### oauthclientsinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `clientId` (string)

### oauthclientslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### oauthclientscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `description` (string)
- `developerName` (string)
- `developerUrl` (string)
- `avatarUrl` (string)
- `redirectUris` (array)
- `published` (boolean)

### oauthclientsupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `developerName` (string)
- `developerUrl` (string)
- `avatarUrl` (string)
- `redirectUris` (array)
- `published` (boolean)

### oauthclientsrotatesecret

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### oauthclientsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### revisionsinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### revisionslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### sharesinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `documentId` (string)

### shareslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### sharescreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `documentId` (string)

### sharesupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `published` (boolean)

### sharesrevoke

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### starscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `documentId` (string)
- `collectionId` (string)
- `index` (string)

### starslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `offset` (number)
- `limit` (number)

### starsupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `index` (string)

### starsdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### usersinvite

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `invites` (array)

### usersinfo

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### userslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### usersupdate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `language` (string)
- `avatarUrl` (string)

### usersupdaterole

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `role` (string)

### userssuspend

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### usersactivate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### usersdelete

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### viewslist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `documentId` (string)

### viewscreate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `documentId` (string)
