# @open-mcp/pokeapi_co

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "pokeapi_co": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/pokeapi_co@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/pokeapi_co@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
SESSIONID='...'
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add pokeapi_co \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --SESSIONID=$SESSIONID \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add pokeapi_co \
  .cursor/mcp.json \
  --SESSIONID=$SESSIONID \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add pokeapi_co \
  /path/to/client/config.json \
  --SESSIONID=$SESSIONID \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "pokeapi_co": {
      "command": "npx",
      "args": ["-y", "@open-mcp/pokeapi_co"],
      "env": {"SESSIONID":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `SESSIONID` - gets sent to the API provider
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### ability_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### ability_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### berry_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### berry_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### berry_firmness_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### berry_firmness_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### berry_flavor_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### berry_flavor_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### characteristic_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### characteristic_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### contest_type_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### contest_type_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### contest_effect_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### contest_effect_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### egg_group_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### egg_group_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### encounter_method_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### encounter_method_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### encounter_condition_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### encounter_condition_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### encounter_condition_value_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### encounter_condition_value_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### evolution_chain_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### evolution_chain_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### evolution_trigger_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### evolution_trigger_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### generation_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### generation_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### gender_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### gender_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### growth_rate_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### growth_rate_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### item_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### item_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### item_category_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### item_category_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### item_attribute_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### item_attribute_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### item_fling_effect_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### item_fling_effect_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### item_pocket_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### item_pocket_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### language_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### language_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### location_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### location_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### location_area_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### location_area_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### machine_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### machine_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### move_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### move_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### move_ailment_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### move_ailment_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### move_battle_style_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### move_battle_style_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### move_category_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### move_category_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### move_damage_class_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### move_damage_class_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### move_learn_method_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### move_learn_method_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### move_target_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### move_target_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### nature_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### nature_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pal_park_area_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pal_park_area_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokedex_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokedex_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokemon_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokemon_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokemon_color_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokemon_color_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokemon_form_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokemon_form_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokemon_habitat_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokemon_habitat_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokemon_shape_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokemon_shape_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokemon_species_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokemon_species_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokeathlon_stat_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### pokeathlon_stat_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### region_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### region_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### stat_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### stat_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### super_contest_effect_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### super_contest_effect_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### type_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### type_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### version_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### version_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### version_group_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `q` (string)

### version_group_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### pokemon_encounters_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pokemon_id` (string)
