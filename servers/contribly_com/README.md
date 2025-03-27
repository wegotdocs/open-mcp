# @open-mcp/contribly_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "contribly_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/contribly_com"],
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

### get_artifact_formats

### get_assignments

### post_assignments

### delete_assignments_id_

### get_assignments_id_

### get_change_log

### get_contribution_refinement_types

### get_contribution_refinements

### get_contributions

### post_contributions

### delete_contributions_id_

### get_contributions_id_

### post_contributions_id_flag

### post_contributions_id_like

### get_contributions_id_likes

### post_contributions_id_moderate

### get_credentials

### get_event_types

### post_export

### post_export_summary

### get_exports_id_

### get_form_responses

### post_form_responses

### get_form_responses_id_

### get_forms

### post_forms

### delete_forms_id_

### get_forms_id_

### post_media

### get_notifications_contributions_id_preview

### get_scopes

### get_subscription_types

### get_subscriptions

### delete_subscriptions_id_

### get_tags

### post_tags

### get_tags_id_

### get_tagsets

### post_tagsets

### get_tagsets_id_

### get_users

### get_users_id_

### get_users_id_linked_type_

### post_verify

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/contribly_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/contribly_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
