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

### getcomments

**Environment variables**

- `API_KEY`

**Input schema**

- `after` (string)
- `before` (string)
- `limit` (integer)
- `cursor` (string)
- `comment_status_filter` (string)
- `external_comment_id` (string)
- `post_id` (array)

### getcommentdetail

**Environment variables**

- `API_KEY`

**Input schema**

- `comment_id` (string)

### getpostsv1

**Environment variables**

- `API_KEY`

**Input schema**

- `after` (string)
- `before` (string)
- `limit` (integer)
- `cursor` (string)
- `external_id` (string)
- `group_id` (array)

### createpostv1

**Environment variables**

- `API_KEY`

**Input schema**

- `attachments` (array)
- `body` (string)
- `comments_enabled` (boolean)
- `external_id` (string)
- `group_id` (string)
- `highlighted_until` (string)
- `mentioned_user_ids` (array)
- `published_at` (string)
- `reactions_enabled` (boolean)
- `scheduled_at` (string)
- `send_push_notifications` (boolean)
- `title` (string)

### getpostdetail

**Environment variables**

- `API_KEY`

**Input schema**

- `postId` (string)

### getcommentsforpost

**Environment variables**

- `API_KEY`

**Input schema**

- `postId` (string)
- `after` (string)
- `before` (string)
- `limit` (integer)
- `cursor` (string)

### createcommentreaction

**Environment variables**

- `API_KEY`

**Input schema**

- `postId` (string)
- `commentId` (string)
- `published_at` (string)
- `reacting_user_id` (string)
- `type` (string)

### createpostseen

**Environment variables**

- `API_KEY`

**Input schema**

- `postId` (string)
- `seen_at` (string)
- `user_id` (string)

### createpostreaction

**Environment variables**

- `API_KEY`

**Input schema**

- `postId` (string)
- `published_at` (string)
- `reacting_user_id` (string)
- `type` (string)

### deletepostv1

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)

### updatepostv1

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `attachments` (array)
- `body` (string)
- `comments_enabled` (boolean)
- `external_id` (string)
- `highlighted_until` (string)
- `mentioned_user_ids` (array)
- `published_at` (string)
- `reactions_enabled` (boolean)
- `scheduled_at` (string)
- `title` (string)

### createcomment

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `attachments` (array)
- `author_id` (string)
- `body` (string)
- `external_id` (string)
- `language` (string)
- `mentioned_user_ids` (array)
- `published_at` (string)
- `quoted_comment_id` (string)

### deletecomment

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `comment_id` (string)

### updatecomment

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `comment_id` (string)
- `attachments` (array)
- `body` (string)
- `external_id` (string)
- `language` (string)
- `mentioned_user_ids` (array)

### getpostsv2

**Environment variables**

- `API_KEY`

**Input schema**

- `after` (string)
- `before` (string)
- `limit` (integer)
- `cursor` (string)
- `external_post_id` (string)
- `published_status` (string)
- `post_status` (string)
- `group_id` (array)

### createpostv2

**Environment variables**

- `API_KEY`

**Input schema**

- `attachments` (array)
- `author_id` (string)
- `body` (string)
- `comments_enabled` (boolean)
- `external_id` (string)
- `group_ids` (array)
- `highlighted_until` (string)
- `language` (string)
- `mentioned_user_ids` (array)
- `published_at` (string)
- `reactions_enabled` (boolean)
- `scheduled_at` (string)
- `send_push_notifications` (boolean)
- `title` (string)

### uploadattachment

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getattachmentstatus

**Environment variables**

- `API_KEY`

**Input schema**

- `attachment_id` (string)
