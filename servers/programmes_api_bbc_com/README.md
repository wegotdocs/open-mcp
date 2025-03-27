# @open-mcp/programmes_api_bbc_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "programmes_api_bbc_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/programmes_api_bbc_com"],
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

### getapi

### listavailability

### listbroadcasts

### listgroups

### listimages

### listitems

### listmasterbrands

### listpeople

### listpips

### listprogrammedetails

### listprogrammes

### listpromotions

### listschedules

### getxsd

### listservices

### get_raw_brand

### get_raw_brand_franchises

### get_raw_episode

### get_raw_ancestors

### get_raw_formats

### get_raw_genre_groups

### get_raw_image

### get_raw_masterbrand

### get_raw_promotion

### listversions

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/programmes_api_bbc_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/programmes_api_bbc_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
