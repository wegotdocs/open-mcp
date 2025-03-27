# @open-mcp/httpbin_org

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "httpbin_org": {
      "command": "npx",
      "args": ["-y", "@open-mcp/httpbin_org"],
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

### get_absolute_redirect_n_

### delete_anything

### get_anything

### patch_anything

### post_anything

### put_anything

### trace_anything

### delete_anything_anything_

### get_anything_anything_

### patch_anything_anything_

### post_anything_anything_

### put_anything_anything_

### trace_anything_anything_

### get_base64_value_

### get_basic_auth_user_passwd_

### get_bearer

### get_brotli

### get_bytes_n_

### get_cache

### get_cache_value_

### get_cookies

### get_cookies_delete

### get_cookies_set

### get_cookies_set_name_value_

### get_deflate

### delete_delay_delay_

### get_delay_delay_

### patch_delay_delay_

### post_delay_delay_

### put_delay_delay_

### trace_delay_delay_

### delete_delete

### get_deny

### get_digest_auth_qop_user_passwd_

### get_digest_auth_qop_user_passwd_algorithm_

### get_digest_auth_qop_user_passwd_algorithm_stale_after_

### get_drip

### get_encoding_utf8

### get_etag_etag_

### get_get

### get_gzip

### get_headers

### get_hidden_basic_auth_user_passwd_

### get_html

### get_image

### get_image_jpeg

### get_image_png

### get_image_svg

### get_image_webp

### get_ip

### get_json

### get_links_n_offset_

### patch_patch

### post_post

### put_put

### get_range_numbytes_

### delete_redirect_to

### get_redirect_to

### patch_redirect_to

### post_redirect_to

### put_redirect_to

### trace_redirect_to

### get_redirect_n_

### get_relative_redirect_n_

### get_response_headers

### post_response_headers

### get_robots_txt

### delete_status_codes_

### get_status_codes_

### patch_status_codes_

### post_status_codes_

### put_status_codes_

### trace_status_codes_

### get_stream_bytes_n_

### get_stream_n_

### get_user_agent

### get_uuid

### get_xml

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/httpbin_org
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/httpbin_org`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
