# @open-mcp/pokeapi_co

## Installing

First set the environment variables as shell variables:

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

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/pokeapi_co
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/pokeapi_co`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### ability_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### ability_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### berry_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### berry_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### berry_firmness_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### berry_firmness_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### berry_flavor_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### berry_flavor_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### characteristic_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### characteristic_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### contest_type_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### contest_type_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### contest_effect_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### contest_effect_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### egg_group_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### egg_group_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### encounter_method_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### encounter_method_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### encounter_condition_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### encounter_condition_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### encounter_condition_value_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### encounter_condition_value_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### evolution_chain_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### evolution_chain_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### evolution_trigger_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### evolution_trigger_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### generation_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### generation_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### gender_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### gender_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### growth_rate_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### growth_rate_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### item_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### item_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### item_category_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### item_category_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### item_attribute_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### item_attribute_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### item_fling_effect_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### item_fling_effect_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### item_pocket_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### item_pocket_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### language_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### language_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### location_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### location_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### location_area_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional()
}
```

### location_area_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique integer value identifying this location area.")
}
```

### machine_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### machine_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### move_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### move_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### move_ailment_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### move_ailment_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### move_battle_style_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### move_battle_style_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### move_category_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### move_category_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### move_damage_class_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### move_damage_class_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### move_learn_method_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### move_learn_method_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### move_target_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### move_target_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### nature_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### nature_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pal_park_area_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pal_park_area_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokedex_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokedex_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokemon_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokemon_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokemon_color_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokemon_color_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokemon_form_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokemon_form_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokemon_habitat_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokemon_habitat_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokemon_shape_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokemon_shape_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokemon_species_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokemon_species_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokeathlon_stat_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### pokeathlon_stat_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### region_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### region_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### stat_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### stat_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### super_contest_effect_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### super_contest_effect_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### type_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### type_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### version_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### version_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### version_group_list

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().describe("> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the \`name\` property. ").optional()
}
```

### version_group_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("This parameter can be a string or an integer.")
}
```

### pokemon_encounters_retrieve

**Environment variables**

- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "pokemon_id": z.string().regex(new RegExp("^\\d+$"))
}
```
