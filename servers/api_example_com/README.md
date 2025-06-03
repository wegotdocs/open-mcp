# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### root_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### login_api_auth_login_post

**Environment variables**

No environment variables required

**Input schema**

- `login` (string)
- `password` (string)

### refresh_api_auth_refresh_post

**Environment variables**

No environment variables required

**Input schema**

- `refresh_token` (string)

### register_api_auth_register_post

**Environment variables**

No environment variables required

**Input schema**

- `first_name` (string)
- `last_name` (string)
- `login` (string)
- `phone_number` (string)
- `password` (string)
- `repeat_password` (string)

### get_list_api_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `mobile` (boolean)

### add_api_users_post

**Environment variables**

- `API_KEY`

**Input schema**

- `first_name` (string)
- `last_name` (string)
- `login` (string)
- `phone_number` (other)
- `is_mobile` (boolean)
- `type` (string)
- `organization_id` (integer)
- `password` (string)
- `repeat_password` (string)

### get_current_user_api_users_me_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### self_user_update_api_users_me_put

**Environment variables**

- `API_KEY`

**Input schema**

- `first_name` (string)
- `last_name` (string)
- `login` (string)
- `phone_number` (other)

### self_user_delete_api_users_me_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_by_id_api_users_user_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)

### update_api_users_user_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)
- `first_name` (string)
- `last_name` (string)
- `login` (string)
- `is_mobile` (boolean)
- `phone_number` (other)
- `type` (other)
- `organization_id` (integer)

### delete_api_users_user_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)

### update_password_api_users_user_id_password_put

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)
- `password` (string)
- `repeat_password` (string)

### enable_user_api_users_user_id_enable_put

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)

### disable_user_api_users_user_id_disable_put

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (integer)

### activate_user_api_users_activate_post

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)
- `login` (string)

### get_list_api_organizations_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### create_api_organizations_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `parent_id` (other)

### update_api_organizations_organization_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `organization_id` (integer)
- `name` (string)
- `parent_id` (other)

### get_by_id_api_organizations_organization_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `organization_id` (integer)

### enable_organization_api_organizations_organization_id_enable_put

**Environment variables**

- `API_KEY`

**Input schema**

- `organization_id` (integer)

### disable_organization_api_organizations_organization_id_disable_p

**Environment variables**

- `API_KEY`

**Input schema**

- `organization_id` (integer)

### get_list_api_robots_short_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_list_with_event_api_robots_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### create_api_robots_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `serial_number` (string)
- `robot_type` (string)
- `organization_id` (integer)
- `dealers_ids` (other)
- `users_ids` (other)
- `software_version` (other)

### update_api_robots_robot_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `name` (other)
- `serial_number` (other)
- `robot_type` (other)
- `organization_id` (other)
- `dealers_ids` (other)
- `users_ids` (other)
- `software_version` (other)

### get_by_id_api_robots_robot_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)

### add_robot_to_account_api_robots_robot_token_add_post

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_token` (string)

### get_user_token_api_robots_robot_id_user_token_get

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### get_list_api_robot_notifications_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `page_size` (integer)

### get_list_page_api_robot_events_robot_id_page_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `page` (integer)
- `page_size` (integer)

### get_list_period_api_robot_events_robot_id_period_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `from_date` (string)
- `to_date` (string)

### create_api_robot_events_robot_id_post

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)
- `battery_voltage` (other)
- `power_used` (other)
- `state` (other)
- `last_marker` (other)
- `act_trip_dist` (other)
- `not_ended_trips` (other)
- `status_auto` (other)
- `status_mode` (other)
- `M1_dist` (other)
- `M2_dist` (other)
- `M1_max_current` (other)
- `M2_max_current` (other)
- `M3_max_current` (other)
- `M5_max_current` (other)
- `M6_max_current` (other)
- `M7_max_current` (other)
- `M3_speed` (other)
- `M1_inverter_temperature` (other)
- `M2_inverter_temperature` (other)
- `M3_inverter_temperature` (other)
- `M2_temperature` (other)
- `M3_temperature` (other)
- `trip_number` (other)
- `dist` (other)
- `trip_completed` (other)
- `charging_current` (other)
- `regulation_error` (other)
- `errors_1` (other)
- `errors_2` (other)
- `status_codes` (other)

### get_list_page_api_robot_configs_robot_robot_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `page` (integer)
- `page_size` (integer)

### create_api_robot_configs_robot_robot_id_post

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)

### get_by_id_api_robot_configs_config_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (integer)

### get_last_for_robot_api_robot_configs_robot_id_config_get

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### create_for_robot_api_robot_configs_robot_id_config_post

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### get_last_uuid_for_robot_api_robot_configs_robot_id_config_uuid_g

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### get_list_page_api_robot_routes_robot_robot_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `page` (integer)
- `page_size` (integer)

### create_api_robot_routes_robot_robot_id_post

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)

### get_by_id_api_robot_routes_route_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `route_id` (integer)

### get_last_for_robot_api_robot_routes_robot_id_route_get

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### create_for_robot_api_robot_routes_robot_id_route_post

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### get_last_uuid_for_robot_api_robot_routes_robot_id_route_uuid_get

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### get_list_page_api_robot_actions_robot_robot_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `page` (integer)
- `page_size` (integer)

### create_api_robot_actions_robot_robot_id_post

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `action` (other)
- `time` (other)

### get_last_for_robot_api_robot_actions_robot_id_accept_action_get

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)
- `status` (other)

### create_for_robot_api_robot_actions_robot_id_read_action_get

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)

### get_list_with_event_api_v2_robots_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_list_with_event_by_type_api_v2_robots_robot_type_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_type` (string)

### get_robot_events_api_v2_robot_events_robot_id_page_get

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `page` (integer)
- `page_size` (integer)

### get_robot_events_for_period_api_v2_robot_events_robot_id_period_

**Environment variables**

- `API_KEY`

**Input schema**

- `robot_id` (integer)
- `from_date` (string)
- `to_date` (string)

### create_lizard_event_api_v2_robot_events_robot_id_lizard_post

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)
- `battery_voltage` (other)
- `power_used` (other)
- `state` (other)
- `last_marker` (other)
- `act_trip_dist` (other)
- `not_ended_trips` (other)
- `status_auto` (other)
- `status_mode` (other)
- `M1_dist` (other)
- `M2_dist` (other)
- `M1_max_current` (other)
- `M2_max_current` (other)
- `M3_max_current` (other)
- `M5_max_current` (other)
- `M6_max_current` (other)
- `M7_max_current` (other)
- `M3_speed` (other)
- `M1_inverter_temperature` (other)
- `M2_inverter_temperature` (other)
- `M3_inverter_temperature` (other)
- `M2_temperature` (other)
- `M3_temperature` (other)
- `trip_number` (other)
- `dist` (other)
- `trip_completed` (other)
- `charging_current` (other)
- `regulation_error` (other)
- `errors_1` (other)
- `errors_2` (other)
- `status_codes` (other)

### create_falcon_event_api_v2_robot_events_robot_id_falcon_post

**Environment variables**

No environment variables required

**Input schema**

- `robot_id` (integer)
- `supply_voltage` (other)
- `supply_current` (other)
- `grid_power` (other)
- `battery_voltage` (other)
- `battery_current` (other)
- `battery_power` (other)
- `remaining_dc_current` (other)
- `charge_state` (other)
- `left_wheel_current` (other)
- `right_wheel_current` (other)
- `belt_current` (other)
- `left_wheel_speed` (other)
- `right_wheel_speed` (other)
- `belt_speed` (other)
- `left_wheel_distance` (other)
- `right_wheel_distance` (other)
- `cutter_speed` (other)
- `mixer_speed` (other)
- `cutter_torque` (other)
- `mixer_torque` (other)
- `pump_speed` (other)
- `pump_torque` (other)
- `left_weight_sensor` (other)
- `right_weight_sensor` (other)
- `rear_weight_sensor` (other)
- `total_weight` (other)
- `cutter_position` (other)
- `pump_pressure` (other)
- `current_antenna_position` (other)
- `current_loop` (other)
- `front_loop_position` (other)
- `rear_loop_position` (other)
- `front_loop_power` (other)
- `rear_loop_power` (other)
- `weight_to_dispense` (other)
- `current_route` (other)
- `current_action` (other)
- `cutter_energy` (other)
- `mixer_energy` (other)
- `pump_energy` (other)
- `drive_wheels_energy` (other)
- `belt_energy` (other)
- `other_devices_energy` (other)
- `grid_energy_for_operations` (other)
- `grid_energy_for_charging` (other)
- `battery_energy_for_operations` (other)
- `drive_wheels_temp` (other)
- `cutter_motor_temp` (other)
- `mixer_motor_temp` (other)
- `hydraulic_pump_temp` (other)
- `battery_temp` (other)
- `converter_chamber_temp` (other)
- `control_cabinet_temp` (other)
- `mbdv_controllers_temp` (other)
- `acs_inverters_temp` (other)
- `automaton_status` (other)
- `power_status` (other)
- `machine_status` (other)
- `sensor_status` (other)
- `input_status` (other)
- `output_status` (other)
- `status_1` (other)
- `status_2` (other)
- `status_3` (other)
- `ultrasonic_front_left` (other)
- `ultrasonic_front_right` (other)
- `ultrasonic_rear_left` (other)
- `ultrasonic_rear_right` (other)
- `ultrasonic_side_front_left` (other)
- `ultrasonic_side_front_right` (other)
- `ultrasonic_side_rear_left` (other)
- `ultrasonic_side_rear_right` (other)
