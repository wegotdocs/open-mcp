# @open-mcp/telegram

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "telegram": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/telegram@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/telegram@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add telegram \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add telegram \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add telegram \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "telegram": {
      "command": "npx",
      "args": ["-y", "@open-mcp/telegram"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### description_getupdates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_getupdates

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `offset` (integer)
- `limit` (integer)
- `timeout` (integer)

### description_setwebhook

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_setwebhook

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `url` (string)
- `certificate` (object)

### description_getme

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_getme

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### description_sendmessage

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendmessage

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `text` (string)
- `parse_mode` (string)
- `disable_web_page_preview` (boolean)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_forwardmessage

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_forwardmessage

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `from_chat_id` (other)
- `disable_notification` (boolean)
- `message_id` (integer)

### description_sendphoto

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendphoto

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `photo` (other)
- `caption` (string)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_sendaudio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendaudio

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `audio` (other)
- `duration` (integer)
- `performer` (string)
- `title` (string)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_senddocument

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_senddocument

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `document` (other)
- `caption` (string)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_sendsticker

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendsticker

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `sticker` (other)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_sendvideo

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendvideo

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `video` (other)
- `duration` (integer)
- `width` (integer)
- `height` (integer)
- `caption` (string)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_sendvoice

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendvoice

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `voice` (other)
- `duration` (integer)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_sendlocation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendlocation

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `latitude` (number)
- `longitude` (number)
- `disable_notification` (boolean)
- `reply_to_message_id` (integer)
- `reply_markup` (other)

### description_sendchataction

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sendchataction

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `chat_id` (other)
- `action` (string)

### description_getuserprofilephotos

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_getuserprofilephotos

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `user_id` (integer)
- `offset` (integer)
- `limit` (integer)

### description_getfile

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_getfile

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `file_id` (string)

### description_answerinlinequery

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_answerinlinequery

**Environment variables**

No environment variables required

**Input schema**

- `Parameters` (string)
- `inline_query_id` (string)
- `results` (array)
- `cache_time` (integer)
- `is_personal` (boolean)
- `next_offset` (string)
