# @open-mcp/baby-buddy

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "baby-buddy": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/baby-buddy@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/baby-buddy@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add baby-buddy \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add baby-buddy \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add baby-buddy \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "baby-buddy": {
      "command": "npx",
      "args": ["-y", "@open-mcp/baby-buddy"],
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

### listbmis

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `date` (string)
- `ordering` (string)

### createbmi

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `bmi` (number)
- `date` (string)
- `notes` (string)
- `tags` (array)

### retrievebmi

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### updatebmi

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `bmi` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### partialupdatebmi

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `bmi` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### destroybmi

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### listdiaperchanges

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `amount` (string)
- `child` (string)
- `color` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `solid` (string)
- `wet` (string)
- `tags` (string)
- `ordering` (string)

### creatediaperchange

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `time` (string)
- `wet` (boolean)
- `solid` (boolean)
- `color` (string)
- `amount` (number)
- `notes` (string)
- `tags` (array)

### retrievediaperchange

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `amount` (string)
- `child` (string)
- `color` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `solid` (string)
- `wet` (string)
- `tags` (string)
- `ordering` (string)

### updatediaperchange

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `amount` (string)
- `child` (string)
- `color` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `solid` (string)
- `wet` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `time` (string)
- `b_wet` (boolean)
- `b_solid` (boolean)
- `b_color` (string)
- `b_amount` (number)
- `notes` (string)
- `b_tags` (array)

### partialupdatediaperchange

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `amount` (string)
- `child` (string)
- `color` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `solid` (string)
- `wet` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `time` (string)
- `b_wet` (boolean)
- `b_solid` (boolean)
- `b_color` (string)
- `b_amount` (number)
- `notes` (string)
- `b_tags` (array)

### destroydiaperchange

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `amount` (string)
- `child` (string)
- `color` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `solid` (string)
- `wet` (string)
- `tags` (string)
- `ordering` (string)

### listchildren

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `id` (string)
- `first_name` (string)
- `last_name` (string)
- `slug` (string)
- `birth_date` (string)
- `birth_time` (string)
- `ordering` (string)

### createchild

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `first_name` (string)
- `last_name` (string)
- `birth_date` (string)
- `birth_time` (string)
- `slug` (string)
- `picture` (string)

### retrievechild

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `id` (string)
- `first_name` (string)
- `last_name` (string)
- `q_slug` (string)
- `birth_date` (string)
- `birth_time` (string)
- `ordering` (string)

### updatechild

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `id` (string)
- `first_name` (string)
- `last_name` (string)
- `q_slug` (string)
- `birth_date` (string)
- `birth_time` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_first_name` (string)
- `b_last_name` (string)
- `b_birth_date` (string)
- `b_birth_time` (string)
- `b_slug` (string)
- `picture` (string)

### partialupdatechild

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `id` (string)
- `first_name` (string)
- `last_name` (string)
- `q_slug` (string)
- `birth_date` (string)
- `birth_time` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_first_name` (string)
- `b_last_name` (string)
- `b_birth_date` (string)
- `b_birth_time` (string)
- `b_slug` (string)
- `picture` (string)

### destroychild

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `id` (string)
- `first_name` (string)
- `last_name` (string)
- `q_slug` (string)
- `birth_date` (string)
- `birth_time` (string)
- `ordering` (string)

### listfeedings

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `method` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `type` (string)
- `tags` (string)
- `ordering` (string)

### createfeeding

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `start` (string)
- `end` (string)
- `timer` (integer)
- `duration` (string)
- `type` (string)
- `method` (string)
- `amount` (number)
- `notes` (string)
- `tags` (array)

### retrievefeeding

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `method` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `type` (string)
- `tags` (string)
- `ordering` (string)

### updatefeeding

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `method` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `type` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_start` (string)
- `b_end` (string)
- `timer` (integer)
- `duration` (string)
- `b_type` (string)
- `b_method` (string)
- `amount` (number)
- `notes` (string)
- `b_tags` (array)

### partialupdatefeeding

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `method` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `type` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_start` (string)
- `b_end` (string)
- `timer` (integer)
- `duration` (string)
- `b_type` (string)
- `b_method` (string)
- `amount` (number)
- `notes` (string)
- `b_tags` (array)

### destroyfeeding

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `method` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `type` (string)
- `tags` (string)
- `ordering` (string)

### listheadcircumferences

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `date` (string)
- `ordering` (string)

### createheadcircumference

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `head_circumference` (number)
- `date` (string)
- `notes` (string)
- `tags` (array)

### retrieveheadcircumference

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### updateheadcircumference

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `head_circumference` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### partialupdateheadcircumference

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `head_circumference` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### destroyheadcircumference

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### listheights

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `date` (string)
- `ordering` (string)

### createheight

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `height` (number)
- `date` (string)
- `notes` (string)
- `tags` (array)

### retrieveheight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### updateheight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `height` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### partialupdateheight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `height` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### destroyheight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### listnotes

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)

### createnote

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `note` (string)
- `image` (string)
- `time` (string)
- `tags` (array)

### retrievenote

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)

### updatenote

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `note` (string)
- `image` (string)
- `time` (string)
- `b_tags` (array)

### partialupdatenote

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `note` (string)
- `image` (string)
- `time` (string)
- `b_tags` (array)

### destroynote

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)

### listpumpings

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `ordering` (string)

### createpumping

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `amount` (number)
- `start` (string)
- `end` (string)
- `duration` (string)
- `notes` (string)
- `tags` (array)
- `timer` (integer)

### retrievepumping

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `ordering` (string)

### updatepumping

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `amount` (number)
- `b_start` (string)
- `b_end` (string)
- `duration` (string)
- `notes` (string)
- `tags` (array)
- `timer` (integer)

### partialupdatepumping

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `amount` (number)
- `b_start` (string)
- `b_end` (string)
- `duration` (string)
- `notes` (string)
- `tags` (array)
- `timer` (integer)

### destroypumping

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `ordering` (string)

### listsleeps

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)

### createsleep

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `start` (string)
- `end` (string)
- `timer` (integer)
- `duration` (string)
- `nap` (boolean)
- `notes` (string)
- `tags` (array)

### retrievesleep

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)

### updatesleep

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_start` (string)
- `b_end` (string)
- `timer` (integer)
- `duration` (string)
- `nap` (boolean)
- `notes` (string)
- `b_tags` (array)

### partialupdatesleep

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_start` (string)
- `b_end` (string)
- `timer` (integer)
- `duration` (string)
- `nap` (boolean)
- `notes` (string)
- `b_tags` (array)

### destroysleep

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)

### listtags

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `last_used` (string)
- `name` (string)
- `ordering` (string)

### createtag

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `name` (string)
- `color` (string)
- `last_used` (string)

### retrievetag

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `last_used` (string)
- `name` (string)
- `ordering` (string)

### updatetag

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `last_used` (string)
- `name` (string)
- `ordering` (string)
- `b_slug` (string)
- `b_name` (string)
- `color` (string)
- `b_last_used` (string)

### partialupdatetag

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `last_used` (string)
- `name` (string)
- `ordering` (string)
- `b_slug` (string)
- `b_name` (string)
- `color` (string)
- `b_last_used` (string)

### destroytag

**Environment variables**

No environment variables required

**Input schema**

- `slug` (string)
- `last_used` (string)
- `name` (string)
- `ordering` (string)

### listtemperatures

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)

### createtemperature

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `temperature` (number)
- `time` (string)
- `notes` (string)
- `tags` (array)

### retrievetemperature

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)

### updatetemperature

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `temperature` (number)
- `time` (string)
- `notes` (string)
- `b_tags` (array)

### partialupdatetemperature

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `temperature` (number)
- `time` (string)
- `notes` (string)
- `b_tags` (array)

### destroytemperature

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `date_max` (string)
- `date_min` (string)
- `tags` (string)
- `ordering` (string)

### listtimers

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `name` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `user` (string)
- `ordering` (string)

### createtimer

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `name` (string)
- `start` (string)
- `duration` (string)
- `user` (integer)

### retrievetimer

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `name` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `user` (string)
- `ordering` (string)

### updatetimer

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `name` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `user` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_name` (string)
- `b_start` (string)
- `duration` (string)
- `b_user` (integer)

### partialupdatetimer

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `name` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `user` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_name` (string)
- `b_start` (string)
- `duration` (string)
- `b_user` (integer)

### destroytimer

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `name` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `user` (string)
- `ordering` (string)

### listtummytimes

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)

### createtummytime

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `start` (string)
- `end` (string)
- `timer` (integer)
- `duration` (string)
- `milestone` (string)
- `tags` (array)

### retrievetummytime

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)

### updatetummytime

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_start` (string)
- `b_end` (string)
- `timer` (integer)
- `duration` (string)
- `milestone` (string)
- `b_tags` (array)

### partialupdatetummytime

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `b_start` (string)
- `b_end` (string)
- `timer` (integer)
- `duration` (string)
- `milestone` (string)
- `b_tags` (array)

### destroytummytime

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `end` (string)
- `end_max` (string)
- `end_min` (string)
- `start` (string)
- `start_max` (string)
- `start_min` (string)
- `tags` (string)
- `ordering` (string)

### listweights

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `child` (string)
- `date` (string)
- `ordering` (string)

### createweight

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `child` (integer)
- `weight` (number)
- `date` (string)
- `notes` (string)
- `tags` (array)

### retrieveweight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### updateweight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `weight` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### partialupdateweight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)
- `b_id` (integer)
- `b_child` (integer)
- `weight` (number)
- `b_date` (string)
- `notes` (string)
- `tags` (array)

### destroyweight

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `child` (string)
- `date` (string)
- `ordering` (string)

### retrievecurrentprofile

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### restarttimer

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (integer)
- `child` (integer)
- `name` (string)
- `start` (string)
- `duration` (string)
- `user` (integer)
