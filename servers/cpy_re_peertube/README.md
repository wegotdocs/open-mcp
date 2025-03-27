# @open-mcp/cpy_re_peertube

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "cpy_re_peertube": {
      "command": "npx",
      "args": ["-y", "@open-mcp/cpy_re_peertube"],
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

### getabuses

### post_api_v1_abuses

### delete_api_v1_abuses_abuseid_

### put_api_v1_abuses_abuseid_

### get_api_v1_abuses_abuseid_messages

### post_api_v1_abuses_abuseid_messages

### delete_api_v1_abuses_abuseid_messages_abusemessageid_

### getaccounts

### getaccount

### getaccountfollowers

### get_api_v1_accounts_name_ratings

### get_api_v1_accounts_name_video_channel_syncs

### get_api_v1_accounts_name_video_channels

### get_api_v1_accounts_name_video_playlists

### getaccountvideos

### get_api_v1_blocklist_status

### getconfig

### getabout

### delcustomconfig

### getcustomconfig

### putcustomconfig

### get_api_v1_custom_pages_homepage_instance

### put_api_v1_custom_pages_homepage_instance

### post_api_v1_jobs_pause

### post_api_v1_jobs_resume

### getjobs

### post_api_v1_metrics_playback

### getoauthclient

### getplugins

### getavailableplugins

### addplugin

### uninstallplugin

### updateplugin

### getplugin

### get_api_v1_plugins_npmname_public_settings

### get_api_v1_plugins_npmname_registered_settings

### put_api_v1_plugins_npmname_settings

### searchchannels

### searchplaylists

### searchvideos

### getinstanceauditlogs

### get_api_v1_server_blocklist_accounts

### post_api_v1_server_blocklist_accounts

### delete_api_v1_server_blocklist_accounts_accountname_

### get_api_v1_server_blocklist_servers

### post_api_v1_server_blocklist_servers

### delete_api_v1_server_blocklist_servers_host_

### get_api_v1_server_followers

### delete_api_v1_server_followers_namewithhost_

### post_api_v1_server_followers_namewithhost_accept

### post_api_v1_server_followers_namewithhost_reject

### get_api_v1_server_following

### post_api_v1_server_following

### delete_api_v1_server_following_hostorhandle_

### getinstancelogs

### sendclientlog

### getmirroredvideos

### putmirroredvideo

### delmirroredvideo

### put_api_v1_server_redundancy_host_

### getinstancestats

### getusers

### adduser

### resendemailtoverifyuser

### getuserinfo

### putuserinfo

### getmyabuses

### delete_api_v1_users_me_avatar

### post_api_v1_users_me_avatar_pick

### get_api_v1_users_me_history_videos

### post_api_v1_users_me_history_videos_remove

### delete_api_v1_users_me_history_videos_videoid_

### put_api_v1_users_me_notification_settings

### get_api_v1_users_me_notifications

### post_api_v1_users_me_notifications_read

### post_api_v1_users_me_notifications_read_all

### get_api_v1_users_me_subscriptions

### post_api_v1_users_me_subscriptions

### get_api_v1_users_me_subscriptions_exist

### get_api_v1_users_me_subscriptions_videos

### delete_api_v1_users_me_subscriptions_subscriptionhandle_

### get_api_v1_users_me_subscriptions_subscriptionhandle_

### get_api_v1_users_me_video_playlists_videos_exist

### get_api_v1_users_me_video_quota_used

### get_api_v1_users_me_videos

### get_api_v1_users_me_videos_imports

### get_api_v1_users_me_videos_videoid_rating

### registeruser

### listregistrations

### resendemailtoverifyregistration

### requestregistration

### deleteregistration

### acceptregistration

### rejectregistration

### verifyregistrationemail

### revokeoauthtoken

### getoauthtoken

### deluser

### getuser

### parameters_api_v1_users_id_

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/cpy_re_peertube
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/cpy_re_peertube`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
