# @open-mcp/api_venice_ai_api_v1

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_venice_ai_api_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_venice_ai_api_v1"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### createchatcompletion

### generateimage

### upscaleimage

### get_image_styles

### listmodels

### listmodeltraits

### listmodelcompatibilitymapping

### getapikeys

### deleteapikey

### createapikeys

### getapikeyratelimits

### getapikeyratelimitlogs

### getapikeygenerateweb3key

### postapikeygenerateweb3key

### listcharacters

### createspeech

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_venice_ai_api_v1
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_venice_ai_api_v1`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
