# @open-mcp/dodo_ac

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "dodo_ac": {
      "command": "npx",
      "args": ["-y", "@open-mcp/dodo_ac"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### get_nh_art

### get_nh_art_artwork_

### get_nh_bugs

### get_nh_bugs_bug_

### get_nh_clothing

### get_nh_clothing_clothing_

### get_nh_events

### get_nh_fish

### get_nh_fish_fish_

### get_nh_fossils_all

### get_nh_fossils_all_fossil_

### get_nh_fossils_groups

### get_nh_fossils_groups_fossil_group_

### get_nh_fossils_individuals

### get_nh_fossils_individuals_fossil_

### get_nh_furniture

### get_nh_furniture_furniture_

### get_nh_interior

### get_nh_interior_item_

### get_nh_items

### get_nh_items_item_

### get_nh_photos

### get_nh_photos_item_

### get_nh_recipes

### get_nh_recipes_item_

### get_nh_sea

### get_nh_sea_sea_creature_

### get_nh_tools

### get_nh_tools_tool_

### get_villagers

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/dodo_ac
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/dodo_ac`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
