# @open-mcp/apideck_com_file_storage

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "apideck_com_file_storage": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apideck_com_file_storage"],
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

### drivegroupsall

### drivegroupsadd

### drivegroupsdelete

### drivegroupsone

### drivegroupsupdate

### drivesall

### drivesadd

### drivesdelete

### drivesone

### drivesupdate

### filesall

### filesupload

### filessearch

### filesdelete

### filesone

### filesupdate

### filesdownload

### foldersadd

### foldersdelete

### foldersone

### foldersupdate

### folderscopy

### sharedlinksall

### sharedlinksadd

### sharedlinksdelete

### sharedlinksone

### sharedlinksupdate

### uploadsessionsadd

### uploadsessionsdelete

### uploadsessionsone

### uploadsessionsupload

### uploadsessionsfinish

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apideck_com_file_storage
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apideck_com_file_storage`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
