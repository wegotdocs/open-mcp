# @open-mcp/api_example_com

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_example_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_example_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### get_the_list_of_players_api_storevue_player_list_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### get_the_list_of_media_items_api_storevue_media_list_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### get_the_server_information_api_v3_sys_info_get

**Environment variables**



**Input schema**

```ts
{}
```

### get_the_player_license_information_api_v3_sys_player_lic_info_ge

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### get_frontend_config_api_v3_sys_frontend_config_get

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### add_org_default_webplayer_api_v3_sys_org_org_id_add_default_webp

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int().describe("組織 ID。"),
  "session_id": z.string().optional()
}
```

### set_org_webplayer_lic_count_api_v3_sys_org_org_id_set_webplayer_

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int().describe("組織 ID。"),
  "lic_count": z.number().int().describe("網頁播放器授權數量。"),
  "session_id": z.string().optional()
}
```

### config_org_api_v3_sys_org_org_id_config_post

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "task_review_required": z.union([z.number().int(), z.null()]).describe("null or 0: Off, any or 1: On").optional(),
  "task_retention": z.union([z.number().int(), z.null()]).describe("minutes. null: forever").optional(),
  "session_id": z.string().optional()
}
```

### get_operation_logs_api_v3_sys_oplogs_get

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().date().optional(),
  "end_date": z.string().date().optional(),
  "time_offset": z.number().describe("Browser time offset relative to UTC time. ex: China Standard Time: 8, Eastern Standard Time: -5").optional(),
  "log_types": z.array(z.string()).describe("Log types").optional(),
  "t_types": z.array(z.string()).describe("Target types").optional(),
  "session_id": z.string().optional()
}
```

### log_in_api_v3_auth_login_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "t": z.string().describe("StoreVue token").optional(),
  "username": z.string().optional(),
  "password": z.string().optional(),
  "prefer_lang": z.string().optional(),
  "time_offset": z.number().int().optional()
}
```

### logout_api_v3_auth_logout_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### add_an_user_api_v3_user_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "role_id": z.number().int().gte(1).lte(3),
  "org_id": z.number().int(),
  "email": z.union([z.string(), z.null()]).optional(),
  "prefer_lang": z.union([z.string(), z.null()]).optional(),
  "authorization": z.union([z.object({ "org": z.number().int().gte(0).lte(2).describe("組織。使用者角色最少要為 Administrator。"), "user": z.number().int().gte(0).lte(2).describe("使用者。使用者角色最少要為 Manager。"), "dev": z.number().int().gte(0).lte(2).describe("設備 (播放器、感測器)。使用者角色最少要為 Manager。"), "content": z.number().int().gte(0).lte(2).describe("內容 (節目、媒體、事件、排程)。"), "dispatch": z.number().int().gte(0).lte(2).describe("派送。"), "settings": z.number().int().gte(0).lte(2).describe("設定。") }).describe("0: 無權限, 1: 唯讀, 2: 全權限。"), z.null()]).optional(),
  "accessible_org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}
```

### get_the_list_of_users_api_v3_user_list_get

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.union([z.number().int(), z.null()]).optional(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### get_an_user_api_v3_user_user_id_get

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_an_user_api_v3_user_user_id_put

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "user_update_in": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "userauth_in": z.union([z.object({ "org": z.number().int().gte(0).lte(2).describe("組織。使用者角色最少要為 Administrator。"), "user": z.number().int().gte(0).lte(2).describe("使用者。使用者角色最少要為 Manager。"), "dev": z.number().int().gte(0).lte(2).describe("設備 (播放器、感測器)。使用者角色最少要為 Manager。"), "content": z.number().int().gte(0).lte(2).describe("內容 (節目、媒體、事件、排程)。"), "dispatch": z.number().int().gte(0).lte(2).describe("派送。"), "settings": z.number().int().gte(0).lte(2).describe("設定。") }).describe("0: 無權限, 1: 唯讀, 2: 全權限。"), z.null()]).optional(),
  "accessible_org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}
```

### delete_an_user_api_v3_user_user_id_delete

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### reset_an_user_s_password_api_v3_user_user_id_password_delete

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_user_itself_api_v3_me_get

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### update_the_user_itself_api_v3_me_put

**Environment variables**



**Input schema**

```ts
{
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "email": z.union([z.string(), z.null()]).optional(),
  "prefer_lang": z.union([z.string(), z.null()]).optional()
}
```

### update_the_user_s_own_password_api_v3_me_password_put

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "old_password": z.string(),
  "new_password": z.string()
}
```

### change_to_a_company_api_v3_me_change_to_company_org_id_put

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_list_of_companies_api_v3_org_company_list_get

**Environment variables**



**Input schema**

```ts
{
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### add_a_company_api_v3_org_company_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5")
}
```

### add_a_location2_api_v3_org_company_org_id_location_post

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "root_org_id": z.number().int(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5"),
  "longitude": z.union([z.number(), z.null()]).optional(),
  "latitude": z.union([z.number(), z.null()]).optional(),
  "postal_address": z.union([z.string(), z.null()]).optional(),
  "weather_address": z.union([z.string(), z.null()]).optional()
}
```

### get_a_company_api_v3_org_company_org_id_get

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_company_api_v3_org_company_org_id_put

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5")
}
```

### delete_a_company_api_v3_org_company_org_id_delete

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_configuration_of_a_company_api_v3_org_company_org_id_con

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_the_configuration_of_a_company_api_v3_org_company_org_id_

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional(),
  "smtp": z.union([z.object({ "host": z.union([z.string(), z.null()]).optional(), "port": z.union([z.number().int(), z.null()]).optional(), "secure": z.union([z.boolean(), z.null()]).optional(), "username": z.union([z.string(), z.null()]).optional(), "password": z.union([z.string(), z.null()]).optional() }), z.null()]).optional(),
  "dev_offline_noti_grace_period_mins": z.union([z.number().int(), z.null()]).optional(),
  "task_overdue_mins": z.union([z.number().int(), z.null()]).optional(),
  "task_review_required": z.union([z.boolean(), z.null()]).optional(),
  "task_end_noti_enabled": z.union([z.boolean(), z.null()]).optional(),
  "task_overdue_cancel_enabled": z.union([z.boolean(), z.null()]).optional(),
  "task_review_noti_enabled": z.union([z.boolean(), z.null()]).optional(),
  "task_overdue_noti_enabled": z.union([z.boolean(), z.null()]).optional()
}
```

### set_events_of_a_company_to_default_values_api_v3_org_company_org

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_list_of_locations_in_a_company_api_v3_org_location_list_

**Environment variables**



**Input schema**

```ts
{
  "root_org_id": z.union([z.number().int(), z.null()]).describe("Only the super administrator can specify the root_org_id; otherwise, the org_id will default to the user's org_id.").optional(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### add_a_location_api_v3_org_location_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "root_org_id": z.number().int(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5"),
  "longitude": z.union([z.number(), z.null()]).optional(),
  "latitude": z.union([z.number(), z.null()]).optional(),
  "postal_address": z.union([z.string(), z.null()]).optional(),
  "weather_address": z.union([z.string(), z.null()]).optional()
}
```

### get_a_location_api_v3_org_location_org_id_get

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_location_api_v3_org_location_org_id_put

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5"),
  "longitude": z.union([z.number(), z.null()]).optional(),
  "latitude": z.union([z.number(), z.null()]).optional(),
  "postal_address": z.union([z.string(), z.null()]).optional(),
  "weather_address": z.union([z.string(), z.null()]).optional()
}
```

### delete_a_location_api_v3_org_location_org_id_delete

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### add_ota_package_api_v3_ota_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "name": z.union([z.string(), z.null()]).optional(),
  "os_type_id": z.union([z.number().int(), z.null()]).optional(),
  "package_name": z.union([z.string(), z.null()]).optional(),
  "version_code": z.union([z.number().int(), z.null()]).optional(),
  "version_name": z.union([z.string(), z.null()]).optional(),
  "flavor": z.union([z.string(), z.null()]).optional(),
  "dependency_list": z.union([z.array(z.record(z.any())), z.null()]).optional()
}
```

### upload_ota_package_api_v3_ota_upload_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### get_ota_package_list_api_v3_ota_list_get

**Environment variables**



**Input schema**

```ts
{
  "os_type_id": z.union([z.number().int(), z.null()]).optional(),
  "package_name": z.union([z.string(), z.null()]).optional(),
  "version_code": z.union([z.number().int(), z.null()]).optional(),
  "version_name": z.union([z.string(), z.null()]).optional(),
  "flavor": z.union([z.string(), z.null()]).optional(),
  "session_id": z.string().optional()
}
```

### update_ota_package_attributes_api_v3_ota_ota_id_put

**Environment variables**



**Input schema**

```ts
{
  "ota_id": z.number().int().describe("OTA 包 ID。"),
  "session_id": z.string().optional(),
  "os_type_id": z.union([z.number().int(), z.null()]).optional(),
  "package_name": z.union([z.string(), z.null()]).optional(),
  "version_code": z.union([z.number().int(), z.null()]).optional(),
  "version_name": z.union([z.string(), z.null()]).optional(),
  "flavor": z.union([z.string(), z.null()]).optional(),
  "dependency_list": z.union([z.array(z.record(z.any())), z.null()]).optional()
}
```

### delete_ota_package_api_v3_ota_ota_id_delete

**Environment variables**



**Input schema**

```ts
{
  "ota_id": z.number().int().describe("OTA 包 ID。"),
  "session_id": z.string().optional()
}
```

### update_ota_package_description_api_v3_ota_ota_id_description_put

**Environment variables**



**Input schema**

```ts
{
  "ota_id": z.number().int().describe("OTA 包 ID。"),
  "session_id": z.string().optional()
}
```

### upload_ota_package_by_ota_id_api_v3_ota_ota_id_upload_post

**Environment variables**



**Input schema**

```ts
{
  "ota_id": z.number().int().describe("OTA 包 ID。"),
  "session_id": z.string().optional()
}
```

### get_the_list_of_activated_players_api_v3_dev_player_list_get

**Environment variables**



**Input schema**

```ts
{
  "os_type_id": z.union([z.array(z.number().int()), z.null()]).describe("Empty / 0: All, 1: Windows, 2: Android, 3: Web").optional(),
  "exclude_unknown_os": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### get_the_list_of_inactivated_players_api_v3_dev_inactive_player_l

**Environment variables**



**Input schema**

```ts
{
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### get_the_list_of_sensors_api_v3_dev_sensor_list_get

**Environment variables**



**Input schema**

```ts
{
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### add_a_sensor_api_v3_dev_sensor_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "display_name": z.string(),
  "org_id": z.union([z.number().int(), z.null()]).describe("Only the super administrator can specify the org_id; otherwise, the org_id will default to the user's org_id.").optional(),
  "output_list": z.array(z.object({ "output_name": z.string(), "output_type_id": z.number().int().describe("1: Text, 2: Number, 3: Array"), "description": z.union([z.string(), z.null()]).optional() }))
}
```

### activate_players_api_v3_dev_activate_player_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "org_id": z.number().int(),
  "dev_id_list": z.array(z.number().int())
}
```

### update_multiple_player_s_player_property_api_v3_dev_player_prope

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "dev_id_list": z.array(z.number().int()).describe("播放器 ID 清單。"),
  "dev_player_property_in": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n播放器屬性。")
}
```

### tag_multiple_devices_api_v3_dev_tag_put

**Environment variables**



**Input schema**

```ts
{
  "flush": z.union([z.number().int(), z.null()]).describe("Flush out old tags? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "dev_id_list": z.array(z.number().int()),
  "tag_id_list": z.array(z.number().int())
}
```

### command_multiple_devices_api_v3_dev_command_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "dev_id_list": z.array(z.number().int()),
  "command": z.string(),
  "log_date": z.union([z.string(), z.null()]).optional()
}
```

### configure_multiple_devices_api_v3_dev_conf_put

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "dev_id_list": z.array(z.number().int()),
  "dev_conf_in": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### get_a_device_api_v3_dev_dev_id_get

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_device_api_v3_dev_dev_id_put

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "wol_mac": z.union([z.string(), z.null()]).optional(),
  "api_ip": z.union([z.string(), z.null()]).optional(),
  "output_list": z.union([z.array(z.object({ "output_name": z.string(), "output_type_id": z.number().int().describe("1: Text, 2: Number, 3: Array"), "description": z.union([z.string(), z.null()]).optional() })), z.null()]).optional(),
  "conf": z.union([z.object({ "volume": z.union([z.number().int(), z.null()]).describe("0-100 (%)").optional(), "web_browser_readonly": z.union([z.boolean(), z.null()]).optional(), "allow_touchscreen": z.union([z.boolean(), z.null()]).optional(), "topmost": z.union([z.boolean(), z.null()]).optional(), "hide_taskbar": z.union([z.boolean(), z.null()]).optional(), "hide_cursor": z.union([z.boolean(), z.null()]).optional(), "monitor_on_schedule": z.union([z.object({ "all": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "sun": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "mon": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "tue": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "wed": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "thu": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "fri": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "sat": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional() }), z.null()]).optional(), "monitor_off_schedule": z.union([z.object({ "all": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "sun": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "mon": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "tue": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "wed": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "thu": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "fri": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "sat": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional() }), z.null()]).optional(), "reboot_schedule": z.union([z.object({ "all": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "sun": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "mon": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "tue": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "wed": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "thu": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "fri": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional(), "sat": z.union([z.string(), z.null()]).describe("Ex: 08:00").optional() }), z.null()]).optional(), "facematch": z.union([z.object({ "host": z.union([z.string(), z.null()]).optional(), "port": z.union([z.number().int(), z.null()]).optional(), "secure": z.union([z.boolean(), z.null()]).optional(), "username": z.union([z.string(), z.null()]).optional(), "password": z.union([z.string(), z.null()]).optional(), "ws_port": z.union([z.number().int(), z.null()]).optional() }), z.null()]).optional(), "video_player": z.union([z.string(), z.null()]).optional() }), z.null()]).optional(),
  "srps": z.union([z.record(z.any()), z.null()]).optional()
}
```

### delete_a_device_api_v3_dev_dev_id_delete

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### tag_a_device_api_v3_dev_dev_id_tag_put

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "flush": z.union([z.number().int(), z.null()]).describe("Flush out old tags? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### request_the_device_to_detect_srps_api_v3_dev_dev_id_detect_srps_

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_srp_detection_result_of_the_device_api_v3_dev_dev_id_srp

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "srp_name": z.string(),
  "session_id": z.string().optional()
}
```

### add_a_device_tag_api_v3_tag_dev_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "org_id": z.number().int().describe("Only the super administrator can specify the org_id; otherwise, the org_id will default to the user's org_id.")
}
```

### get_the_list_of_device_tags_api_v3_tag_dev_list_get

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int().describe("Only the super administrator can specify the org_id; otherwise, the org_id will default to the user's org_id."),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### get_a_device_tag_api_v3_tag_dev_tag_id_get

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_device_tag_api_v3_tag_dev_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### delete_a_device_tag_api_v3_tag_dev_tag_id_delete

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_tag_dev_list_api_v3_tag_dev_tag_id_dev_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int().describe("標籤 ID。"),
  "flush": z.union([z.number().int(), z.null()]).describe("是否清除舊關聯。不指定/0: 不清除 (添加), 任意值/1: 清除 (設定)。").optional(),
  "session_id": z.string().optional()
}
```

### get_the_list_of_devices_associated_with_the_device_tag_api_v3_ta

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### update_tag_dev_list_api_v3_tag_dev_tag_id_dev_list_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int().describe("標籤 ID。"),
  "flush": z.union([z.number().int(), z.null()]).describe("是否清除舊關聯。不指定/0: 不清除 (添加), 任意值/1: 清除 (設定)。").optional(),
  "session_id": z.string().optional()
}
```

### add_a_media_folder_api_v3_tag_media_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### get_a_media_folder_api_v3_tag_media_tag_id_get

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_media_folder_api_v3_tag_media_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### delete_a_media_folder_api_v3_tag_media_tag_id_delete

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### move_a_media_folder_api_v3_tag_media_tag_id_to_tag_dst_tag_id_pu

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### copy_a_media_folder_api_v3_tag_media_tag_id_to_tag_dst_tag_id_po

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_storage_usage_of_a_media_folder_api_v3_tag_media_tag_id_

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### add_a_program_folder_api_v3_tag_prog_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### get_a_program_folder_api_v3_tag_prog_tag_id_get

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_prog_folder_api_v3_tag_prog_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### delete_a_program_folder_api_v3_tag_prog_tag_id_delete

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### move_a_program_folder_api_v3_tag_prog_tag_id_to_tag_dst_tag_id_p

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### copy_a_program_folder_api_v3_tag_prog_tag_id_to_tag_dst_tag_id_p

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### add_a_schedule_folder_api_v3_tag_skd_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### get_a_schedule_folder_api_v3_tag_skd_tag_id_get

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_schedule_folder_api_v3_tag_skd_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### delete_a_schedule_folder_api_v3_tag_skd_tag_id_delete

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### move_a_schedule_folder_api_v3_tag_skd_tag_id_to_tag_dst_tag_id_p

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### copy_a_schedule_folder_api_v3_tag_skd_tag_id_to_tag_dst_tag_id_p

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### add_an_event_type_api_v3_tag_evt_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### get_an_event_type_api_v3_tag_evt_tag_id_get

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_an_event_type_api_v3_tag_evt_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}
```

### delete_an_event_type_api_v3_tag_evt_tag_id_delete

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_a_style_folder_api_v3_tag_style_tag_id_get

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### move_a_folder_api_v3_tag_tag_id_to_tag_dst_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "tag_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_list_of_html_addons_api_v3_media_html_addon_list_get

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional()
}
```

### add_a_media_item_via_upload_api_v3_media_tag_dst_tag_id_upload_p

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "conflict": z.number().int().describe("Indicates how to handle name conflicts. Empty / 0: Refuses and returns 409 Conflict; 1: Replaces. If the file extensions are not the same, 403 Forbidden will be returned. If the files are identical, the request will be ignored and 304 Not Modified will be returned; Any / 2: Creates anyway. An index number will be added to the name.").optional(),
  "session_id": z.string().optional()
}
```

### add_a_media_item_api_v3_media_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "is_temporary": z.number().int().describe("Is temporary? Empty / 0: No, Any / 1: Yes (for the thumbnail creation)").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "media_type_id": z.number().int().describe("Refer to Enum.MediaTypeEnum."),
  "html_addon_id": z.union([z.number().int(), z.null()]).describe("Refer to Enum.HtmlAddonEnum. Once specified, media_type_id will be set to 6.").optional(),
  "button_type_id": z.union([z.number().int(), z.null()]).describe("Null: Non-button, 1: Button group (Default button style), 2: Button item").optional(),
  "activation_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "expiration_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "partner_media_id": z.union([z.number().int(), z.null()]).optional(),
  "content": z.union([z.string(), z.null()]).optional(),
  "content_source": z.union([z.string(), z.null()]).optional(),
  "extra_content": z.union([z.record(z.any()), z.null()]).optional(),
  "argument": z.union([z.record(z.any()), z.null()]).optional(),
  "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #E63131FF").optional(),
  "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #F0E596FF").optional(),
  "font_prop": z.union([z.record(z.any()), z.null()]).optional(),
  "width": z.union([z.number().int(), z.null()]).describe("Expected width (pixels). Only for thumbnail creation.").optional(),
  "height": z.union([z.number().int(), z.null()]).describe("Expected height (pixels). Only for thumbnail creation.").optional(),
  "scale": z.union([z.number().int(), z.null()]).optional()
}
```

### get_a_media_item_api_v3_media_media_id_get

**Environment variables**



**Input schema**

```ts
{
  "media_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_media_item_api_v3_media_media_id_put

**Environment variables**



**Input schema**

```ts
{
  "media_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "activation_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "expiration_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "partner_media_id": z.union([z.number().int(), z.null()]).optional(),
  "content": z.union([z.string(), z.null()]).optional(),
  "content_source": z.union([z.string(), z.null()]).optional(),
  "extra_content": z.union([z.record(z.any()), z.null()]).optional(),
  "argument": z.union([z.record(z.any()), z.null()]).optional(),
  "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #E63131FF").optional(),
  "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #F0E596FF").optional(),
  "font_prop": z.union([z.record(z.any()), z.null()]).optional(),
  "width": z.union([z.number().int(), z.null()]).describe("Expected width (pixels). Only for thumbnail creation.").optional(),
  "height": z.union([z.number().int(), z.null()]).describe("Expected height (pixels). Only for thumbnail creation.").optional()
}
```

### delete_a_media_item_api_v3_media_media_id_delete

**Environment variables**



**Input schema**

```ts
{
  "media_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### move_a_media_item_api_v3_media_media_id_to_tag_dst_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "media_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### copy_a_media_item_api_v3_media_media_id_to_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "media_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_clients_of_a_media_item_api_v3_media_media_id_clients_ge

**Environment variables**



**Input schema**

```ts
{
  "media_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### add_a_program_api_v3_prog_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "prog_type_id": z.number().int().describe("1: Program, 2: Program group, 3: Interactive program"),
  "os_type_id_list": z.union([z.array(z.number().int()), z.null()]).describe("1: Windows, 2: Android, 3: Web").optional(),
  "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(),
  "back_media_id": z.union([z.number().int(), z.null()]).optional(),
  "width": z.union([z.number().int(), z.null()]).describe("Pixels.").optional(),
  "height": z.union([z.number().int(), z.null()]).describe("Pixels.").optional(),
  "duration": z.union([z.number().int(), z.null()]).describe("Seconds. Null/0: According to estimated_duration, -1: Eternal").optional(),
  "monitor_list": z.array(z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "name": z.union([z.string(), z.null()]).optional(), "index": z.union([z.number().int(), z.null()]).optional(), "left": z.number().int(), "top": z.number().int(), "width": z.number().int(), "height": z.number().int(), "canvas_left": z.number().int(), "canvas_top": z.number().int() }), z.null()])).describe("Monitor list.").optional(),
  "block_list": z.union([z.array(z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "name": z.union([z.string(), z.null()]).optional(), "index": z.union([z.number().int(), z.null()]).optional(), "left": z.number().int(), "top": z.number().int(), "width": z.number().int(), "height": z.number().int(), "canvas_left": z.number().int(), "canvas_top": z.number().int(), "block_type_id": z.number().int(), "primary": z.union([z.boolean(), z.null()]).optional(), "zindex": z.number().int(), "locked": z.union([z.boolean(), z.null()]).optional(), "disabled": z.union([z.boolean(), z.null()]).optional(), "hidden": z.union([z.boolean(), z.null()]).optional(), "group_name": z.union([z.string(), z.null()]).optional(), "table_name": z.union([z.string(), z.null()]).optional(), "multi_playlist": z.union([z.boolean(), z.null()]).optional(), "style_id": z.union([z.number().int(), z.null()]).optional(), "default_style": z.union([z.string(), z.null()]).optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.record(z.any()), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional(), "playlist_list": z.union([z.array(z.object({ "id": z.union([z.number().int(), z.null()]).describe("Only on update.").optional(), "name": z.union([z.string(), z.null()]).optional(), "index": z.union([z.number().int(), z.null()]).optional(), "default": z.union([z.boolean(), z.null()]).optional(), "disabled": z.union([z.boolean(), z.null()]).optional(), "playitem_list": z.union([z.array(z.object({ "id": z.union([z.number().int(), z.null()]).describe("更新時才需要提供。").optional(), "name": z.union([z.string(), z.null()]).describe("播放項目名稱。").optional(), "index": z.number().int().describe("播放項目索引。"), "media_id": z.number().int().describe("媒體 ID。"), "duration": z.union([z.number().int(), z.null()]).describe("Seconds. -1: Forever, Null/0: According to the media").optional(), "left": z.union([z.number().int(), z.null()]).describe("(預留) 左座標 (px)。").optional(), "top": z.union([z.number().int(), z.null()]).describe("(預留) 上座標 (px)。").optional(), "width": z.union([z.number().int(), z.null()]).describe("(預留) 寬 (px)。").optional(), "height": z.union([z.number().int(), z.null()]).describe("(預留) 高 (px)。").optional(), "stretch": z.union([z.number().int(), z.null()]).describe("Null/0/1: Fill, 2: Uniform").optional(), "scale": z.union([z.number().int(), z.null()]).describe("%. Null: 100%").optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).describe("0/100").optional(), "speed": z.union([z.number().int(), z.null()]).optional(), "effect": z.union([z.number().int(), z.null()]).describe("Null/0: None, 1: Upward, 2: Downward, 3: Leftward, 4: Rightward, 5: Fade-in").optional(), "effect_prop": z.union([z.record(z.any()), z.null()]).describe("(預留) 特效參數。").optional() })), z.null()]).optional() })), z.null()]).optional() })), z.null()]).describe("Block list.").optional(),
  "progitem_list": z.union([z.array(z.object({ "index": z.union([z.number().int(), z.null()]).optional(), "subprog_id": z.union([z.number().int(), z.null()]).optional(), "duration": z.union([z.number().int(), z.null()]).describe("Seconds. Null/0: According to the sub-program duration, -1: Eternal").optional() })), z.null()]).describe("Program item list.").optional(),
  "interact_list": z.union([z.array(z.object({ "index": z.union([z.number().int(), z.null()]).optional(), "when_type": z.union([z.string(), z.null()]).describe("signage, prog or block.").optional(), "when_args": z.union([z.record(z.any()), z.null()]).optional(), "when_prog_id": z.union([z.number().int(), z.null()]).optional(), "when_block_id": z.union([z.number().int(), z.null()]).optional(), "on_type": z.union([z.string(), z.null()]).optional(), "on_event": z.union([z.string(), z.null()]).describe("builtin.user_interacted, builtin.idle_timeout, PM2.5, CO2...").optional(), "on_args": z.union([z.record(z.any()), z.null()]).optional(), "then_type": z.union([z.string(), z.null()]).describe("signage or block.").optional(), "then_args": z.union([z.record(z.any()), z.null()]).optional(), "then_block_id": z.union([z.number().int(), z.null()]).optional(), "do_action": z.union([z.string(), z.null()]).optional(), "do_args": z.union([z.record(z.any()), z.null()]).optional(), "do_prog_id": z.union([z.number().int(), z.null()]).optional(), "do_playlist_id": z.union([z.number().int(), z.null()]).optional() })), z.null()]).describe("Interaction list.").optional()
}
```

### get_a_program_api_v3_prog_prog_id_get

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_program_api_v3_prog_prog_id_put

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(),
  "back_media_id": z.union([z.number().int(), z.null()]).optional(),
  "width": z.union([z.number().int(), z.null()]).describe("Pixels.").optional(),
  "height": z.union([z.number().int(), z.null()]).describe("Pixels.").optional(),
  "duration": z.union([z.number().int(), z.null()]).describe("Seconds. Null/0: According to estimated_duration, -1: Eternal").optional(),
  "monitor_list": z.union([z.array(z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "name": z.union([z.string(), z.null()]).optional(), "index": z.union([z.number().int(), z.null()]).optional(), "left": z.number().int(), "top": z.number().int(), "width": z.number().int(), "height": z.number().int(), "canvas_left": z.number().int(), "canvas_top": z.number().int() })), z.null()]).describe("Monitor list.").optional(),
  "block_list": z.union([z.array(z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "name": z.union([z.string(), z.null()]).optional(), "index": z.union([z.number().int(), z.null()]).optional(), "left": z.number().int(), "top": z.number().int(), "width": z.number().int(), "height": z.number().int(), "canvas_left": z.number().int(), "canvas_top": z.number().int(), "block_type_id": z.number().int(), "primary": z.union([z.boolean(), z.null()]).optional(), "zindex": z.number().int(), "locked": z.union([z.boolean(), z.null()]).optional(), "disabled": z.union([z.boolean(), z.null()]).optional(), "hidden": z.union([z.boolean(), z.null()]).optional(), "group_name": z.union([z.string(), z.null()]).optional(), "table_name": z.union([z.string(), z.null()]).optional(), "multi_playlist": z.union([z.boolean(), z.null()]).optional(), "style_id": z.union([z.number().int(), z.null()]).optional(), "default_style": z.union([z.string(), z.null()]).optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.record(z.any()), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional(), "playlist_list": z.union([z.array(z.object({ "id": z.union([z.number().int(), z.null()]).describe("Only on update.").optional(), "name": z.union([z.string(), z.null()]).optional(), "index": z.union([z.number().int(), z.null()]).optional(), "default": z.union([z.boolean(), z.null()]).optional(), "disabled": z.union([z.boolean(), z.null()]).optional(), "playitem_list": z.union([z.array(z.object({ "id": z.union([z.number().int(), z.null()]).describe("更新時才需要提供。").optional(), "name": z.union([z.string(), z.null()]).describe("播放項目名稱。").optional(), "index": z.number().int().describe("播放項目索引。"), "media_id": z.number().int().describe("媒體 ID。"), "duration": z.union([z.number().int(), z.null()]).describe("Seconds. -1: Forever, Null/0: According to the media").optional(), "left": z.union([z.number().int(), z.null()]).describe("(預留) 左座標 (px)。").optional(), "top": z.union([z.number().int(), z.null()]).describe("(預留) 上座標 (px)。").optional(), "width": z.union([z.number().int(), z.null()]).describe("(預留) 寬 (px)。").optional(), "height": z.union([z.number().int(), z.null()]).describe("(預留) 高 (px)。").optional(), "stretch": z.union([z.number().int(), z.null()]).describe("Null/0/1: Fill, 2: Uniform").optional(), "scale": z.union([z.number().int(), z.null()]).describe("%. Null: 100%").optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).describe("0/100").optional(), "speed": z.union([z.number().int(), z.null()]).optional(), "effect": z.union([z.number().int(), z.null()]).describe("Null/0: None, 1: Upward, 2: Downward, 3: Leftward, 4: Rightward, 5: Fade-in").optional(), "effect_prop": z.union([z.record(z.any()), z.null()]).describe("(預留) 特效參數。").optional() })), z.null()]).optional() })), z.null()]).optional() })), z.null()]).describe("Block list.").optional(),
  "progitem_list": z.union([z.array(z.object({ "index": z.union([z.number().int(), z.null()]).optional(), "subprog_id": z.union([z.number().int(), z.null()]).optional(), "duration": z.union([z.number().int(), z.null()]).describe("Seconds. Null/0: According to the sub-program duration, -1: Eternal").optional() })), z.null()]).describe("Program item list.").optional(),
  "interact_list": z.union([z.array(z.object({ "index": z.union([z.number().int(), z.null()]).optional(), "when_type": z.union([z.string(), z.null()]).describe("signage, prog or block.").optional(), "when_args": z.union([z.record(z.any()), z.null()]).optional(), "when_prog_id": z.union([z.number().int(), z.null()]).optional(), "when_block_id": z.union([z.number().int(), z.null()]).optional(), "on_type": z.union([z.string(), z.null()]).optional(), "on_event": z.union([z.string(), z.null()]).describe("builtin.user_interacted, builtin.idle_timeout, PM2.5, CO2...").optional(), "on_args": z.union([z.record(z.any()), z.null()]).optional(), "then_type": z.union([z.string(), z.null()]).describe("signage or block.").optional(), "then_args": z.union([z.record(z.any()), z.null()]).optional(), "then_block_id": z.union([z.number().int(), z.null()]).optional(), "do_action": z.union([z.string(), z.null()]).optional(), "do_args": z.union([z.record(z.any()), z.null()]).optional(), "do_prog_id": z.union([z.number().int(), z.null()]).optional(), "do_playlist_id": z.union([z.number().int(), z.null()]).optional() })), z.null()]).describe("Interaction list.").optional()
}
```

### delete_a_program_api_v3_prog_prog_id_delete

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_json_for_a_program_preview_api_v3_prog_prog_id_preview_j

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_the_thumbnail_of_a_program_api_v3_prog_prog_id_thumbnail_

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "session_id": z.string().optional(),
  "thumbnail": z.string().describe("Base64/JPG.")
}
```

### get_the_clients_of_a_program_api_v3_prog_prog_id_clients_get

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_the_missing_interactions_of_the_company_when_using_a_program

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### move_a_program_api_v3_prog_prog_id_to_tag_dst_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### copy_a_program_api_v3_prog_prog_id_to_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### add_a_style_api_v3_style_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "default": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional(),
  "pressed": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional(),
  "focused": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional(),
  "disabled": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional()
}
```

### get_a_style_api_v3_style_style_id_get

**Environment variables**



**Input schema**

```ts
{
  "style_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_a_style_api_v3_style_style_id_put

**Environment variables**



**Input schema**

```ts
{
  "style_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "default": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional(),
  "pressed": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional(),
  "focused": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional(),
  "disabled": z.union([z.object({ "id": z.union([z.number().int(), z.null()]).describe("Provide id when updating.").optional(), "media_id": z.union([z.number().int(), z.null()]).optional(), "mirror_block_index": z.union([z.number().int(), z.null()]).optional(), "content": z.union([z.string(), z.null()]).optional(), "content_source": z.union([z.string(), z.null()]).optional(), "extra_content": z.union([z.record(z.any()), z.null()]).optional(), "argument": z.union([z.string(), z.null()]).optional(), "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #AABBCCFF").optional(), "font_prop": z.union([z.record(z.any()), z.null()]).optional(), "stretch": z.union([z.number().int(), z.null()]).optional(), "scale": z.union([z.number().int(), z.null()]).optional(), "interactive": z.union([z.boolean(), z.null()]).optional(), "volume": z.union([z.number().int(), z.null()]).optional(), "vertical_align": z.union([z.number().int(), z.null()]).describe("0: Top, 1: Middle, 2: Bottom").optional(), "horizontal_align": z.union([z.number().int(), z.null()]).describe("0: Left, 1: Middle, 2: Right").optional(), "margin": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "padding": z.union([z.array(z.number().int()), z.null()]).describe("[Top, Right, Bottom, Left]").optional(), "border_prop": z.union([z.record(z.any()), z.null()]).optional() }), z.null()]).optional()
}
```

### delete_a_style_api_v3_style_style_id_delete

**Environment variables**



**Input schema**

```ts
{
  "style_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### copy_a_style_api_v3_style_style_id_to_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "style_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### add_a_schedule_api_v3_skd_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "os_type_id_list": z.array(z.number().int()).describe("1: Windows, 2: Android, 3: Web"),
  "skditem_list": z.array(z.object({ "skditem_type_id": z.number().int().describe("時程項目類型 ID。1: 預設節目 (最低優先權), 2: 每日, 3: 每週 (根據 dow), 4: 不重覆 (單日), 5: 週間 (一至五), 6: 週末 (六日), 7: 插播節目 (最高優先權)。"), "prog_id": z.number().int().describe("節目 ID。"), "dow": z.union([z.number().int(), z.null()]).describe("星期幾 (ISO-8601)。一: 1, 二: 2, 三: 3, 四: 4, 五, 5, 六, 6, 日: 7)。").optional(), "start_date": z.union([z.string().date(), z.null()]).describe("開始日期 (區域時間)。").optional(), "end_date": z.union([z.string().date(), z.null()]).describe("結束日期 (區域時間)。").optional(), "start_time": z.union([z.string().time(), z.null()]).describe("開始時間 (區域時間)。").optional(), "end_time": z.union([z.string().time(), z.null()]).describe("結束時間 (區域時間)。").optional(), "exclusion_date_list": z.union([z.array(z.string().date()), z.null()]).describe("排除日期清單 (區域時間)。").optional() }))
}
```

### get_a_schedule_api_v3_skd_skd_id_get

**Environment variables**



**Input schema**

```ts
{
  "skd_id": z.number().int(),
  "show_layout": z.number().int().describe("Show layouts? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}
```

### update_a_schedule_api_v3_skd_skd_id_put

**Environment variables**



**Input schema**

```ts
{
  "skd_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "skditem_list": z.union([z.array(z.object({ "skditem_type_id": z.number().int().describe("時程項目類型 ID。1: 預設節目 (最低優先權), 2: 每日, 3: 每週 (根據 dow), 4: 不重覆 (單日), 5: 週間 (一至五), 6: 週末 (六日), 7: 插播節目 (最高優先權)。"), "prog_id": z.number().int().describe("節目 ID。"), "dow": z.union([z.number().int(), z.null()]).describe("星期幾 (ISO-8601)。一: 1, 二: 2, 三: 3, 四: 4, 五, 5, 六, 6, 日: 7)。").optional(), "start_date": z.union([z.string().date(), z.null()]).describe("開始日期 (區域時間)。").optional(), "end_date": z.union([z.string().date(), z.null()]).describe("結束日期 (區域時間)。").optional(), "start_time": z.union([z.string().time(), z.null()]).describe("開始時間 (區域時間)。").optional(), "end_time": z.union([z.string().time(), z.null()]).describe("結束時間 (區域時間)。").optional(), "exclusion_date_list": z.union([z.array(z.string().date()), z.null()]).describe("排除日期清單 (區域時間)。").optional() })), z.null()]).optional()
}
```

### delete_a_schedule_api_v3_skd_skd_id_delete

**Environment variables**



**Input schema**

```ts
{
  "skd_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### move_a_schedule_api_v3_skd_skd_id_to_tag_dst_tag_id_put

**Environment variables**



**Input schema**

```ts
{
  "skd_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### copy_a_schedule_api_v3_skd_skd_id_to_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "skd_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### dispatch_a_program_to_multiple_players_api_v3_task_dispatch_prog

**Environment variables**



**Input schema**

```ts
{
  "prog_id": z.number().int(),
  "flush_current_skd": z.union([z.number().int(), z.null()]).describe("是否清除設備上已有的時程。不指定/0: 不清除, 與設備上已有的時程進行合併; 任意值/1: 清除, 取代設備上已有的時程。此設定在插播節目時無效。").optional(),
  "replace_previous_dispatch": z.union([z.number().int(), z.null()]).describe("若設備尚有擱置中的派送任務, 是否取代該任務。不指定/0: 不取代, 此次派送失敗; 任意值/1: 取消擱置中的派送任務, 以此派送任務取代。").optional(),
  "session_id": z.string().optional(),
  "task_in": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "dev_id_list": z.array(z.number().int())
}
```

### dispatch_a_schedule_to_multiple_players_api_v3_task_dispatch_skd

**Environment variables**



**Input schema**

```ts
{
  "skd_id": z.number().int().describe("時程 ID。"),
  "flush_current_skd": z.union([z.number().int(), z.null()]).describe("是否清除設備上已有的時程。不指定/0: 不清除, 與設備上已有的時程進行合併; 任意值/1: 清除, 取代設備上已有的時程。").optional(),
  "replace_previous_dispatch": z.union([z.number().int(), z.null()]).describe("若設備尚有擱置中的派送任務, 是否取代該任務。不指定/0: 不取代, 此次派送失敗; 任意值/1: 取消擱置中的派送任務, 以此派送任務取代。").optional(),
  "session_id": z.string().optional(),
  "task_in": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n任務。"),
  "dev_id_list": z.array(z.number().int()).describe("設備 ID 清單。")
}
```

### list_dispatch_tasks_api_v3_task_dispatch_list_get

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int(),
  "start_date": z.string().date(),
  "end_date": z.string().date(),
  "time_offset": z.number().describe("Browser time offset relative to UTC time. ex: China Standard Time: 8, Eastern Standard Time: -5"),
  "session_id": z.string().optional()
}
```

### list_dispatch_tasks_to_be_reviewed_api_v3_task_dispatch_pending_

**Environment variables**



**Input schema**

```ts
{
  "org_id": z.number().int().describe("公司 ID。"),
  "start_date": z.string().date().describe("任務建立時間開始日期。"),
  "end_date": z.string().date().describe("任務建立時間結束日期。"),
  "time_offset": z.number().describe("瀏覽器時區。"),
  "session_id": z.string().optional()
}
```

### get_a_dispatch_task_api_v3_task_dispatch_task_id_get

**Environment variables**



**Input schema**

```ts
{
  "task_id": z.number().int().describe("任務 ID。"),
  "session_id": z.string().optional()
}
```

### review_a_dispatch_task_api_v3_task_dispatch_task_id_review_put

**Environment variables**



**Input schema**

```ts
{
  "task_id": z.number().int(),
  "session_id": z.string().optional(),
  "result": z.boolean().describe("true: Approved, false: Rejected"),
  "note": z.union([z.string(), z.null()]).optional()
}
```

### cancel_multiple_dispatch_tasks_api_v3_task_dispatch_task_delete

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "task_id_list": z.array(z.number().int()).describe("任務 ID 清單。"),
  "note": z.union([z.string(), z.null()]).describe("說明。").optional()
}
```

### cancel_multiple_device_tasks_of_dispatch_api_v3_task_dispatch_de

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "devtask_id_list": z.array(z.number().int()),
  "note": z.union([z.string(), z.null()]).optional()
}
```

### ota_update_multiple_devices_api_v3_task_ota_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "task_in": z.union([z.object({ "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Task start time (edge local time). Null: Immediately start").optional() }), z.null()]).describe("任務。不指定: 立即開始。").optional(),
  "ota_id_list": z.array(z.number().int()).describe("OTA ID 清單。"),
  "dev_id_list": z.array(z.number().int()).describe("設備 ID 清單。")
}
```

### cancel_multiple_device_tasks_of_ota_api_v3_task_ota_devtask_dele

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "devtask_id_list": z.array(z.number().int()).describe("設備任務 ID 清單。"),
  "note": z.union([z.string(), z.null()]).describe("說明。").optional()
}
```

### register_api_v3_edge_register_post

**Environment variables**



**Input schema**

```ts
{
  "name": z.string(),
  "data": z.string().describe("Registration data after encryption")
}
```

### webplayer_register_api_v3_edge_webplayer_register_post

**Environment variables**



**Input schema**

```ts
{
  "org_access_code": z.string(),
  "dev_access_code": z.string()
}
```

### register_data_encrypt_api_v3_edge_register_data_encrypt_post

**Environment variables**



**Input schema**

```ts
{}
```

### update_devtask_status_api_v3_edge_devtask_devtask_id_put

**Environment variables**



**Input schema**

```ts
{
  "devtask_id": z.number().int().describe("設備任務 ID。"),
  "display_name": z.string().describe("設備名稱。"),
  "status_id": z.number().int().describe("設備任務狀態 ID。只能是 1000 Done, 1001 Failed 或 1005 Processing。"),
  "total_count": z.union([z.number().int(), z.null()]).describe("總下載數量 (bytes)。不指定: 清除。").optional(),
  "downloaded_count": z.union([z.number().int(), z.null()]).describe("已下載數量 (bytes)。不指定: 清除。").optional(),
  "download_speed": z.union([z.number().int(), z.null()]).describe("下載速度 (bytes/s)。不指定: 清除。").optional(),
  "note": z.union([z.string(), z.null()]).describe("備註 (下載中檔名或錯誤訊息)。不指定: 清除。").optional(),
  "storage_usage": z.union([z.number().int(), z.null()]).describe("儲存空間使用量。不指定: 不更新。").optional(),
  "access-code": z.string().describe("設備存取碼。")
}
```

### heartbeat_api_v3_edge_dev_dev_id_patch

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "display_name": z.string(),
  "access-code": z.string()
}
```

### current_playing_api_v3_edge_dev_dev_id_current_playing_put

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "display_name": z.string(),
  "skd_status_id": z.number().int().describe("Scheduler Status. 20: Activated, 40: Deactivated."),
  "skd_id": z.union([z.number().int(), z.null()]).optional(),
  "prog3_id": z.union([z.number().int(), z.null()]).optional(),
  "prog2_id": z.union([z.number().int(), z.null()]).optional(),
  "prog1_id": z.union([z.number().int(), z.null()]).optional(),
  "access-code": z.string()
}
```

### upload_a_file_api_v3_edge_dev_dev_id_upload_put

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "display_name": z.string(),
  "filename": z.string(),
  "access-code": z.string()
}
```

### update_srp_detection_results_or_status_api_v3_edge_dev_dev_id_sr

**Environment variables**



**Input schema**

```ts
{
  "dev_id": z.number().int(),
  "srp_name": z.string(),
  "access-code": z.string()
}
```

### add_an_event_api_v3_evt_tag_dst_tag_id_post

**Environment variables**



**Input schema**

```ts
{
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "condition_list": z.union([z.array(z.object({ "sensor": z.string(), "output": z.string(), "output_type_id": z.number().int().gte(1).lte(3).describe("1: Text, 2: Number, 3: Array"), "op": z.string().describe(">, <, >=, <=, ==, !=, has, not has"), "value": z.string() })), z.null()]).optional()
}
```

### get_an_event_api_v3_evt_evt_id_get

**Environment variables**



**Input schema**

```ts
{
  "evt_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### update_an_event_api_v3_evt_evt_id_put

**Environment variables**



**Input schema**

```ts
{
  "evt_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "condition_list": z.union([z.array(z.object({ "sensor": z.string(), "output": z.string(), "output_type_id": z.number().int().gte(1).lte(3).describe("1: Text, 2: Number, 3: Array"), "op": z.string().describe(">, <, >=, <=, ==, !=, has, not has"), "value": z.string() })), z.null()]).optional()
}
```

### delete_an_event_api_v3_evt_evt_id_delete

**Environment variables**



**Input schema**

```ts
{
  "evt_id": z.number().int(),
  "session_id": z.string().optional()
}
```

### get_media_statistics_api_v3_stats_media_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "start_date": z.string().date(),
  "end_date": z.string().date(),
  "media_name": z.union([z.string(), z.null()]).optional(),
  "org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}
```

### get_program_statistics_api_v3_stats_prog_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "start_date": z.string().date(),
  "end_date": z.string().date(),
  "prog_name": z.union([z.string(), z.null()]).optional(),
  "org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}
```

### get_sensor_event_statistics_api_v3_stats_evt_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "start_date": z.string().date(),
  "end_date": z.string().date(),
  "evt_type_name_list": z.union([z.array(z.string()), z.null()]).optional(),
  "org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}
```

### get_click_event_statistics_api_v3_stats_click_post

**Environment variables**



**Input schema**

```ts
{
  "session_id": z.string().optional(),
  "start_date": z.string().date(),
  "end_date": z.string().date(),
  "block_name_list": z.union([z.array(z.string()), z.null()]).optional(),
  "org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}
```

### device_register_doc_api_v3_doc_device_register_get

**Environment variables**



**Input schema**

```ts
{}
```

### device_dispatch_doc_api_v3_doc_device_dispatch_get

**Environment variables**



**Input schema**

```ts
{}
```

### device_command_doc_api_v3_doc_device_command_get

**Environment variables**



**Input schema**

```ts
{}
```

### environment_variable_doc_api_v3_doc_environment_variable_get

**Environment variables**



**Input schema**

```ts
{}
```

### enum_doc_api_v3_doc_enum_get

**Environment variables**



**Input schema**

```ts
{}
```

### player_connection_procedure_api_v3_doc_player_connection_procedu

**Environment variables**



**Input schema**

```ts
{}
```

### event_plan_api_v3_doc_event_plan_get

**Environment variables**



**Input schema**

```ts
{}
```

### interaction_plan_api_v3_doc_interaction_plan_get

**Environment variables**



**Input schema**

```ts
{}
```
