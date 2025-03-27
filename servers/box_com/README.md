# @open-mcp/box_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "box_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/box_com"],
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

### get_authorize

### get_collaboration_whitelist_entries

### post_collaboration_whitelist_entries

### delete_collaboration_whitelist_entries_id

### get_collaboration_whitelist_entries_id

### get_collaboration_whitelist_exempt_targets

### post_collaboration_whitelist_exempt_targets

### delete_collaboration_whitelist_exempt_targets_id

### get_collaboration_whitelist_exempt_targets_id

### get_collaborations

### post_collaborations

### delete_collaborations_id

### get_collaborations_id

### put_collaborations_id

### get_collections

### get_collections_id_items

### post_comments

### delete_comments_id

### get_comments_id

### put_comments_id

### delete_device_pinners_id

### get_device_pinners_id

### get_enterprises_id_device_pinners

### get_events

### options_events

### delete_file_requests_id

### get_file_requests_id

### put_file_requests_id

### post_file_requests_id_copy

### get_file_version_legal_holds

### get_file_version_legal_holds_id

### get_file_version_retentions

### get_file_version_retentions_id

### options_files_content

### post_files_content

### post_files_upload_sessions

### delete_files_upload_sessions_id

### get_files_upload_sessions_id

### put_files_upload_sessions_id

### post_files_upload_sessions_id_commit

### get_files_upload_sessions_id_parts

### delete_files_id

### get_files_id

### post_files_id

### put_files_id

### put_files_id_add_shared_link

### get_files_id_get_shared_link

### put_files_id_remove_shared_link

### put_files_id_update_shared_link

### get_files_id_collaborations

### get_files_id_comments

### get_files_id_content

### post_files_id_content

### post_files_id_copy

### get_files_id_metadata

### delete_files_id_metadata_enterprise_securityclassification_6vmvo

### get_files_id_metadata_enterprise_securityclassification_6vmvochw

### post_files_id_metadata_enterprise_securityclassification_6vmvoch

### put_files_id_metadata_enterprise_securityclassification_6vmvochw

### delete_files_id_metadata_global_boxskillscards

### get_files_id_metadata_global_boxskillscards

### post_files_id_metadata_global_boxskillscards

### put_files_id_metadata_global_boxskillscards

### delete_files_id_metadata_id_id

### get_files_id_metadata_id_id

### post_files_id_metadata_id_id

### put_files_id_metadata_id_id

### get_files_id_tasks

### get_files_id_thumbnail_id

### delete_files_id_trash

### get_files_id_trash

### post_files_id_upload_sessions

### get_files_id_versions

### post_files_id_versions_current

### delete_files_id_versions_id

### get_files_id_versions_id

### put_files_id_versions_id

### delete_files_id_watermark

### get_files_id_watermark

### put_files_id_watermark

### get_folder_locks

### post_folder_locks

### delete_folder_locks_id

### post_folders

### get_folders_trash_items

### delete_folders_id

### get_folders_id

### post_folders_id

### put_folders_id

### put_folders_id_add_shared_link

### get_folders_id_get_shared_link

### put_folders_id_remove_shared_link

### put_folders_id_update_shared_link

### get_folders_id_collaborations

### post_folders_id_copy

### get_folders_id_items

### get_folders_id_metadata

### delete_folders_id_metadata_enterprise_securityclassification_6vm

### get_folders_id_metadata_enterprise_securityclassification_6vmvoc

### post_folders_id_metadata_enterprise_securityclassification_6vmvo

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/box_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/box_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
