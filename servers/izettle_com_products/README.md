# @open-mcp/izettle_com_products

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "izettle_com_products": {
      "command": "npx",
      "args": ["-y", "@open-mcp/izettle_com_products"],
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

### getproducttypes

### createcategories

### deletecategory

### renamecategory

### getalldiscounts

### creatediscount

### deletediscount

### getdiscount

### updatediscount

### getallimageurls

### getlatestimportstatus

### getstatusbyuuid

### importlibraryv2

### getlibrary

### deleteproducts

### getallproductsinpos

### createproduct

### createproductslug

### getalloptions

### getallproductsv2

### countallproducts

### updateproduct

### deleteproduct

### getproduct

### gettaxrates

### createtaxrates

### getproductcountforalltaxes

### gettaxsettings

### settaxationmode

### deletetaxrate

### gettaxrate

### updatetaxrate

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/izettle_com_products
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/izettle_com_products`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
