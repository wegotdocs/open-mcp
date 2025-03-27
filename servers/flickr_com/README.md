# @open-mcp/flickr_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "flickr_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/flickr_com"],
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

### getaccesstoken

### getrequesttoken

### getfavoritescontextbyid

### getfavoritesbypersonid

### getgalleryphotosbyid

### getgrouptopicrepliesbyid

### getgrouptopicbyid

### getgroupdiscussionsbyid

### getgroupbyid

### get_rest_method_flickr_groups_pools_getcontext

### getgroupphotosbyid

### getpersonbyid

### getmediabypersonid

### getphotolistcontextbyid

### getphotostreamcontextbyid

### getphotoexifbyid

### getphotobyid

### getphotosizesbyid

### getlicensebyid

### getmediabysearch

### getalbumcontextbyid

### getalbumsbypersonid

### getalbumbyid

### echo

### uploadphoto

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/flickr_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/flickr_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
