# @open-mcp/chat_stream_io_api_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "chat_stream_io_api_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/chat_stream_io_api_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/chat_stream_io_api_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
AUTHORIZATION='...'
STREAM_AUTH_TYPE='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add chat_stream_io_api_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --AUTHORIZATION=$AUTHORIZATION \
  --STREAM_AUTH_TYPE=$STREAM_AUTH_TYPE
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add chat_stream_io_api_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --AUTHORIZATION=$AUTHORIZATION \
  --STREAM_AUTH_TYPE=$STREAM_AUTH_TYPE
```

### Other

```bash
npx @open-mcp/config add chat_stream_io_api_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --AUTHORIZATION=$AUTHORIZATION \
  --STREAM_AUTH_TYPE=$STREAM_AUTH_TYPE
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "chat_stream_io_api_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/chat_stream_io_api_com"],
      "env": {"API_KEY":"...","AUTHORIZATION":"...","STREAM_AUTH_TYPE":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `AUTHORIZATION` - gets sent to the API provider
- `STREAM_AUTH_TYPE` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getapp

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### updateapp

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `allowed_flag_reasons` (array)
- `apn_config` (object)
- `async_moderation_config` (object)
- `async_url_enrich_enabled` (boolean)
- `auto_translation_enabled` (boolean)
- `before_message_send_hook_url` (string)
- `cdn_expiration_seconds` (integer)
- `channel_hide_members_only` (boolean)
- `custom_action_handler_url` (string)
- `datadog_info` (object)
- `disable_auth_checks` (boolean)
- `disable_permissions_checks` (boolean)
- `enforce_unique_usernames` (string)
- `feeds_moderation_enabled` (boolean)
- `feeds_v2_region` (string)
- `file_upload_config` (object)
- `firebase_config` (object)
- `grants` (object)
- `guest_user_creation_disabled` (boolean)
- `huawei_config` (object)
- `image_moderation_block_labels` (array)
- `image_moderation_enabled` (boolean)
- `image_moderation_labels` (array)
- `image_upload_config` (object)
- `migrate_permissions_to_v2` (boolean)
- `moderation_dashboard_preferences` (object)
- `moderation_enabled` (boolean)
- `moderation_webhook_url` (string)
- `multi_tenant_enabled` (boolean)
- `permission_version` (string)
- `push_config` (object)
- `reminders_interval` (integer)
- `reminders_max_members` (integer)
- `revoke_tokens_issued_before` (string)
- `sns_key` (string)
- `sns_secret` (string)
- `sns_topic_arn` (string)
- `sqs_key` (string)
- `sqs_secret` (string)
- `sqs_url` (string)
- `user_search_disallowed_roles` (array)
- `webhook_events` (array)
- `webhook_url` (string)
- `xiaomi_config` (object)

### listblocklists

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `team` (string)

### createblocklist

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)
- `team` (string)
- `type` (string)
- `words` (array)

### deleteblocklist

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)
- `team` (string)

### getblocklist

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)
- `team` (string)

### updateblocklist

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)
- `team` (string)
- `words` (array)

### getcampaign

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `prev` (string)
- `next` (string)
- `limit` (integer)

### startcampaign

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `scheduled_for` (string)
- `stop_at` (string)

### schedulecampaign

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)

### querycampaigns

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `filter` (object)
- `limit` (integer)
- `next` (string)
- `prev` (string)
- `sort` (array)
- `user_limit` (integer)

### querychannels

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `filter_conditions` (object)
- `limit` (integer)
- `member_limit` (integer)
- `message_limit` (integer)
- `offset` (integer)
- `sort` (array)
- `state` (boolean)
- `user` (object)
- `user_id` (string)

### deletechannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `hard_delete` (boolean)

### updatechannelpartial

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `set` (object)
- `unset` (array)
- `user` (object)
- `user_id` (string)

### updatechannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `accept_invite` (boolean)
- `add_members` (array)
- `add_moderators` (array)
- `assign_roles` (array)
- `cooldown` (integer)
- `data` (object)
- `demote_moderators` (array)
- `hide_history` (boolean)
- `invites` (array)
- `message` (object)
- `reject_invite` (boolean)
- `remove_members` (array)
- `skip_push` (boolean)
- `user` (object)
- `user_id` (string)

### deletedraft

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `parent_id` (string)
- `user_id` (string)

### getdraft

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `parent_id` (string)
- `user_id` (string)

### sendevent

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `event` (object)

### deletefile

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `url` (string)

### uploadfile

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)

### hidechannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `clear_history` (boolean)
- `user` (object)
- `user_id` (string)

### deleteimage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `url` (string)

### uploadimage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)

### updatememberpartial

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `user_id` (string)
- `set` (object)
- `unset` (array)

### sendmessage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `force_moderation` (boolean)
- `keep_channel_hidden` (boolean)
- `message` (object)
- `pending` (boolean)
- `pending_message_metadata` (object)
- `skip_enrich_url` (boolean)
- `skip_push` (boolean)

### getmanymessages

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `ids` (array)

### getorcreatechannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `data` (object)
- `hide_for_creator` (boolean)
- `members` (object)
- `messages` (object)
- `state` (boolean)
- `thread_unread_counts` (boolean)
- `watchers` (object)

### markread

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `message_id` (string)
- `thread_id` (string)
- `user` (object)
- `user_id` (string)

### showchannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `user` (object)
- `user_id` (string)

### truncatechannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `hard_delete` (boolean)
- `member_ids` (array)
- `message` (object)
- `skip_push` (boolean)
- `truncated_at` (string)
- `user` (object)
- `user_id` (string)

### markunread

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `id` (string)
- `message_id` (string)
- `thread_id` (string)
- `user` (object)
- `user_id` (string)

### getorcreatedistinctchannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `data` (object)
- `hide_for_creator` (boolean)
- `members` (object)
- `messages` (object)
- `state` (boolean)
- `thread_unread_counts` (boolean)
- `watchers` (object)

### deletechannels

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `cids` (array)
- `hard_delete` (boolean)

### markchannelsread

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `read_by_channel` (object)
- `user` (object)
- `user_id` (string)

### listchanneltypes

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### createchanneltype

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `automod` (string)
- `automod_behavior` (string)
- `blocklist` (string)
- `blocklist_behavior` (string)
- `blocklists` (array)
- `commands` (array)
- `connect_events` (boolean)
- `custom_events` (boolean)
- `grants` (object)
- `mark_messages_pending` (boolean)
- `max_message_length` (integer)
- `message_retention` (string)
- `mutes` (boolean)
- `name` (string)
- `partition_size` (integer)
- `partition_ttl` (string)
- `permissions` (array)
- `polls` (boolean)
- `push_notifications` (boolean)
- `reactions` (boolean)
- `read_events` (boolean)
- `replies` (boolean)
- `search` (boolean)
- `skip_last_msg_update_for_system_msgs` (boolean)
- `typing_events` (boolean)
- `uploads` (boolean)
- `url_enrichment` (boolean)

### deletechanneltype

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### getchanneltype

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### updatechanneltype

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)
- `allowed_flag_reasons` (array)
- `automod` (string)
- `automod_behavior` (string)
- `automod_thresholds` (object)
- `blocklist` (string)
- `blocklist_behavior` (string)
- `blocklists` (array)
- `commands` (array)
- `connect_events` (boolean)
- `custom_events` (boolean)
- `grants` (object)
- `mark_messages_pending` (boolean)
- `max_message_length` (integer)
- `mutes` (boolean)
- `partition_size` (integer)
- `partition_ttl` (string)
- `permissions` (array)
- `polls` (boolean)
- `push_notifications` (boolean)
- `quotes` (boolean)
- `reactions` (boolean)
- `read_events` (boolean)
- `reminders` (boolean)
- `replies` (boolean)
- `search` (boolean)
- `skip_last_msg_update_for_system_msgs` (boolean)
- `typing_events` (boolean)
- `uploads` (boolean)
- `url_enrichment` (boolean)

### checkpush

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `apn_template` (string)
- `firebase_data_template` (string)
- `firebase_template` (string)
- `message_id` (string)
- `push_provider_name` (string)
- `push_provider_type` (string)
- `skip_devices` (boolean)
- `user` (object)
- `user_id` (string)

### checksns

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `sns_key` (string)
- `sns_secret` (string)
- `sns_topic_arn` (string)

### checksqs

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `sqs_key` (string)
- `sqs_secret` (string)
- `sqs_url` (string)

### listcommands

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### createcommand

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `args` (string)
- `description` (string)
- `name` (string)
- `set` (string)

### deletecommand

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### getcommand

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### updatecommand

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)
- `args` (string)
- `description` (string)
- `set` (string)

### deletedevice

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `user_id` (string)

### listdevices

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_id` (string)

### createdevice

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `push_provider` (string)
- `push_provider_name` (string)
- `user` (object)
- `user_id` (string)
- `voip_token` (boolean)

### querydrafts

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `filter` (object)
- `limit` (integer)
- `next` (string)
- `prev` (string)
- `sort` (array)
- `user` (object)
- `user_id` (string)

### exportusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_ids` (array)

### exportchannels

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `channels` (array)
- `clear_deleted_message_text` (boolean)
- `export_users` (boolean)
- `include_soft_deleted_channels` (boolean)
- `include_truncated_messages` (boolean)
- `version` (string)

### listexternalstorage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### createexternalstorage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `aws_s3` (object)
- `azure_blob` (object)
- `bucket` (string)
- `gcs_credentials` (string)
- `name` (string)
- `path` (string)
- `storage_type` (string)

### deleteexternalstorage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### updateexternalstorage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)
- `aws_s3` (object)
- `azure_blob` (object)
- `bucket` (string)
- `gcs_credentials` (string)
- `path` (string)
- `storage_type` (string)

### checkexternalstorage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### createguest

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user` (object)

### createimporturl

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `filename` (string)

### listimports

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### createimport

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `mode` (string)
- `path` (string)

### getimport

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)

### querymembers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### deletemessage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `hard` (boolean)
- `deleted_by` (string)

### getmessage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `show_deleted_message` (boolean)

### updatemessage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `message` (object)
- `skip_enrich_url` (boolean)
- `skip_push` (boolean)

### updatemessagepartial

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `set` (object)
- `skip_enrich_url` (boolean)
- `unset` (array)
- `user` (object)
- `user_id` (string)

### runmessageaction

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `form_data` (object)
- `user` (object)
- `user_id` (string)

### commitmessage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)

### sendreaction

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `enforce_unique` (boolean)
- `reaction` (object)
- `skip_push` (boolean)

### deletereaction

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `type` (string)
- `user_id` (string)

### getreactions

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `limit` (integer)
- `offset` (integer)

### queryreactions

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `filter` (object)
- `limit` (integer)
- `next` (string)
- `prev` (string)
- `sort` (array)
- `user` (object)
- `user_id` (string)

### translatemessage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `language` (string)

### undeletemessage

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `message` (object)
- `skip_enrich_url` (boolean)
- `skip_push` (boolean)

### castpollvote

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `message_id` (string)
- `poll_id` (string)
- `user` (object)
- `user_id` (string)
- `vote` (object)

### removepollvote

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `message_id` (string)
- `poll_id` (string)
- `vote_id` (string)
- `user_id` (string)

### getreplies

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `parent_id` (string)
- `sort` (array)
- `limit` (integer)
- `offset` (integer)
- `id_gte` (string)
- `id_gt` (string)
- `id_lte` (string)
- `id_lt` (string)
- `created_at_after_or_equal` (string)
- `created_at_after` (string)
- `created_at_before_or_equal` (string)
- `created_at_before` (string)
- `id_around` (string)
- `created_at_around` (string)

### querymessagehistory

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `filter` (object)
- `limit` (integer)
- `next` (string)
- `prev` (string)
- `sort` (array)

### unban

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `target_user_id` (string)
- `channel_cid` (string)
- `created_by` (string)

### ban

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `banned_by` (object)
- `banned_by_id` (string)
- `channel_cid` (string)
- `delete_messages` (string)
- `ip_ban` (boolean)
- `reason` (string)
- `shadow` (boolean)
- `target_user_id` (string)
- `timeout` (integer)
- `user` (object)
- `user_id` (string)

### flag

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `custom` (object)
- `reason` (string)
- `target_message_id` (string)
- `target_user_id` (string)
- `user` (object)
- `user_id` (string)

### querymessageflags

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### muteuser

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `target_ids` (array)
- `timeout` (integer)
- `user` (object)
- `user_id` (string)

### mutechannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `channel_cids` (array)
- `expiration` (integer)
- `user` (object)
- `user_id` (string)

### unmuteuser

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `target_ids` (array)
- `timeout` (integer)
- `user` (object)
- `user_id` (string)

### unmutechannel

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `channel_cids` (array)
- `expiration` (integer)
- `user` (object)
- `user_id` (string)

### getog

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `url` (string)

### listpermissions

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### getpermission

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)

### createpoll

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `Custom` (object)
- `allow_answers` (boolean)
- `allow_user_suggested_options` (boolean)
- `description` (string)
- `enforce_unique_vote` (boolean)
- `id` (string)
- `is_closed` (boolean)
- `max_votes_allowed` (integer)
- `name` (string)
- `options` (array)
- `user` (object)
- `user_id` (string)
- `voting_visibility` (string)

### updatepoll

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `Custom` (object)
- `allow_answers` (boolean)
- `allow_user_suggested_options` (boolean)
- `description` (string)
- `enforce_unique_vote` (boolean)
- `id` (string)
- `is_closed` (boolean)
- `max_votes_allowed` (integer)
- `name` (string)
- `options` (array)
- `user` (object)
- `user_id` (string)
- `voting_visibility` (string)

### deletepoll

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `user_id` (string)

### getpoll

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `user_id` (string)

### updatepollpartial

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `set` (object)
- `unset` (array)
- `user` (object)
- `user_id` (string)

### createpolloption

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `Custom` (object)
- `position` (integer)
- `text` (string)
- `user` (object)
- `user_id` (string)

### updatepolloption

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `Custom` (object)
- `id` (string)
- `text` (string)
- `user` (object)
- `user_id` (string)

### deletepolloption

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `option_id` (string)
- `user_id` (string)

### getpolloption

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `option_id` (string)
- `user_id` (string)

### querypollvotes

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `poll_id` (string)
- `user_id` (string)
- `filter` (object)
- `limit` (integer)
- `next` (string)
- `prev` (string)
- `sort` (array)

### querypolls

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_id` (string)
- `filter` (object)
- `limit` (integer)
- `next` (string)
- `prev` (string)
- `sort` (array)

### updatepushnotificationpreferences

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `preferences` (array)

### listpushproviders

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### upsertpushprovider

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `push_provider` (object)

### deletepushprovider

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `type` (string)
- `name` (string)

### getpushtemplates

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `push_provider_name` (string)
- `push_provider_type` (string)

### upsertpushtemplate

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `enable_push` (boolean)
- `event_type` (string)
- `push_provider_name` (string)
- `push_provider_type` (string)
- `template` (string)

### querybannedusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### getratelimits

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `server_side` (boolean)
- `android` (boolean)
- `ios` (boolean)
- `web` (boolean)
- `endpoints` (string)

### listroles

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### createrole

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### deleterole

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `name` (string)

### search

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### deletesegment

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)

### getsegment

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)

### deletesegmenttargets

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `target_ids` (array)

### segmenttargetexists

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `target_id` (string)

### querysegmenttargets

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)
- `Filter` (object)
- `Sort` (array)
- `limit` (integer)
- `next` (string)
- `prev` (string)

### querysegments

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `filter` (object)
- `limit` (integer)
- `next` (string)
- `prev` (string)
- `sort` (array)

### gettask

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `id` (string)

### querythreads

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `filter` (object)
- `limit` (integer)
- `member_limit` (integer)
- `next` (string)
- `participant_limit` (integer)
- `prev` (string)
- `reply_limit` (integer)
- `sort` (array)
- `user` (object)
- `user_id` (string)

### getthread

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `message_id` (string)
- `reply_limit` (integer)
- `participant_limit` (integer)
- `member_limit` (integer)

### updatethreadpartial

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `message_id` (string)
- `set` (object)
- `unset` (array)
- `user` (object)
- `user_id` (string)

### unreadcounts

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### unreadcountsbatch

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_ids` (array)

### queryusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

No input parameters

### updateuserspartial

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `users` (array)

### updateusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `users` (object)

### deactivateuser

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_id` (string)
- `created_by_id` (string)
- `mark_messages_deleted` (boolean)

### sendusercustomevent

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_id` (string)
- `event` (object)

### exportuser

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_id` (string)

### reactivateuser

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_id` (string)
- `created_by_id` (string)
- `name` (string)
- `restore_messages` (boolean)

### getblockedusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_id` (string)

### blockusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `blocked_user_id` (string)
- `user` (object)
- `user_id` (string)

### deactivateusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `created_by_id` (string)
- `mark_channels_deleted` (boolean)
- `mark_messages_deleted` (boolean)
- `user_ids` (array)

### deleteusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `calls` (string)
- `conversations` (string)
- `messages` (string)
- `new_call_owner_id` (string)
- `new_channel_owner_id` (string)
- `user` (string)
- `user_ids` (array)

### reactivateusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `created_by_id` (string)
- `restore_channels` (boolean)
- `restore_messages` (boolean)
- `user_ids` (array)

### restoreusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `user_ids` (array)

### unblockusers

**Environment variables**

- `API_KEY`
- `AUTHORIZATION`
- `STREAM_AUTH_TYPE`

**Input schema**

- `blocked_user_id` (string)
- `user` (object)
- `user_id` (string)
