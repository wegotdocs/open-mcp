# @open-mcp/api_kanka_io_1_0

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_kanka_io_1_0": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_kanka_io_1_0@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_kanka_io_1_0@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_kanka_io_1_0 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_kanka_io_1_0 \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_kanka_io_1_0 \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_kanka_io_1_0": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_kanka_io_1_0"],
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

### parameters_campaigns_campaignid_entities_entityid_posts

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityposts

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createentitypost

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `entry` (string)
- `visibility` (string)
- `position` (integer)
- `is_private` (boolean)

### parameters_campaigns_campaignid_entities_entityid_posts_postid_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentitypost

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentitypost

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `entry` (string)
- `visibility` (string)
- `position` (integer)
- `is_private` (boolean)

### deleteentitypost

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_attributes

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityattributes

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createentityattribute

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `value` (string)
- `is_private` (boolean)
- `is_star` (boolean)
- `default_order` (integer)

### parameters_campaigns_campaignid_entities_entityid_attributes_att

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityattribute

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentityattribute

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `value` (string)
- `is_private` (boolean)
- `is_star` (boolean)
- `default_order` (integer)

### deleteentityattribute

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_events

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityevents

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createentityevent

**Environment variables**

- `API_KEY`

**Input schema**

- `calendar_id` (integer)
- `event_id` (integer)
- `date` (string)
- `comment` (string)
- `is_private` (boolean)

### parameters_campaigns_campaignid_entities_entityid_entity_events_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityevent

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentityevent

**Environment variables**

- `API_KEY`

**Input schema**

- `calendar_id` (integer)
- `event_id` (integer)
- `date` (string)
- `comment` (string)
- `is_private` (boolean)

### deleteentityevent

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_inventory

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityinventory

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### addentityinventoryitem

**Environment variables**

- `API_KEY`

**Input schema**

- `item_id` (integer)
- `amount` (integer)
- `position` (integer)
- `visibility` (string)
- `is_private` (boolean)

### parameters_campaigns_campaignid_entities_entityid_inventory_inve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityinventoryitem

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentityinventoryitem

**Environment variables**

- `API_KEY`

**Input schema**

- `item_id` (integer)
- `amount` (integer)
- `position` (integer)
- `visibility` (string)
- `is_private` (boolean)

### deleteentityinventoryitem

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_mention

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentitymentions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_tags

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentitytags

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### addentitytag

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (integer)

### parameters_campaigns_campaignid_entities_entityid_entity_tags_ta

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### deleteentitytag

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_permiss

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentitypermissions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### addentitypermission

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)
- `role_id` (integer)
- `access` (string)
- `created_by` (integer)
- `updated_at` (string)
- `updated_by` (integer)

### parameters_campaigns_campaignid_entities_entityid_entity_permiss

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentitypermission

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentitypermission

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)
- `role_id` (integer)
- `access` (string)
- `created_by` (integer)
- `updated_at` (string)
- `updated_by` (integer)

### deleteentitypermission

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_relations

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityrelations

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createentityrelation

**Environment variables**

- `API_KEY`

**Input schema**

- `target_id` (integer)
- `relation` (string)
- `attitude` (integer)
- `color` (string)
- `is_private` (boolean)

### parameters_campaigns_campaignid_entities_entityid_relations_rela

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityrelation

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentityrelation

**Environment variables**

- `API_KEY`

**Input schema**

- `target_id` (integer)
- `relation` (string)
- `attitude` (integer)
- `color` (string)
- `is_private` (boolean)

### deleteentityrelation

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_abiliti

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityabilities

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### addentityability

**Environment variables**

- `API_KEY`

**Input schema**

- `ability_id` (integer)
- `charges` (integer)
- `note` (string)
- `position` (integer)
- `visibility` (string)

### parameters_campaigns_campaignid_entities_entityid_entity_abiliti

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityability

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentityability

**Environment variables**

- `API_KEY`

**Input schema**

- `ability_id` (integer)
- `charges` (integer)
- `note` (string)
- `position` (integer)
- `visibility` (string)

### deleteentityability

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_image

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### uploadentityimage

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### deleteentityimage

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_assets

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityassets

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### addentityasset

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_assets_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityasset

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentityasset

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `visibility` (string)
- `is_private` (boolean)

### deleteentityasset

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_files

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityfiles

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### uploadentityfile

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_files_f

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentityfile

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentityfile

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `visibility` (string)
- `is_private` (boolean)
- `created_at` (string)
- `created_by` (integer)
- `updated_at` (string)
- `updated_by` (integer)

### deleteentityfile

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### parameters_campaigns_campaignid_entities_entityid_entity_links

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentitylinks

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### addentitylink

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `url` (string)
- `icon` (string)
- `position` (integer)
- `is_private` (boolean)

### parameters_campaigns_campaignid_entities_entityid_entity_links_l

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getentitylink

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updateentitylink

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `url` (string)
- `icon` (string)
- `position` (integer)
- `is_private` (boolean)

### deleteentitylink

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters
