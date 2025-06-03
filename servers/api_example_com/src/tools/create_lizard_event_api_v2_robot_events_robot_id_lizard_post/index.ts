import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_lizard_event_api_v2_robot_events_robot_id_lizard_post",
  "toolDescription": "Create Lizard Event",
  "baseUrl": "https://api.example.com",
  "path": "/api/v2/robot_events/{robot_id}/lizard",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "robot_id": "robot_id"
    },
    "body": {
      "battery_voltage": "battery_voltage",
      "power_used": "power_used",
      "state": "state",
      "last_marker": "last_marker",
      "act_trip_dist": "act_trip_dist",
      "not_ended_trips": "not_ended_trips",
      "status_auto": "status_auto",
      "status_mode": "status_mode",
      "M1_dist": "M1_dist",
      "M2_dist": "M2_dist",
      "M1_max_current": "M1_max_current",
      "M2_max_current": "M2_max_current",
      "M3_max_current": "M3_max_current",
      "M5_max_current": "M5_max_current",
      "M6_max_current": "M6_max_current",
      "M7_max_current": "M7_max_current",
      "M3_speed": "M3_speed",
      "M1_inverter_temperature": "M1_inverter_temperature",
      "M2_inverter_temperature": "M2_inverter_temperature",
      "M3_inverter_temperature": "M3_inverter_temperature",
      "M2_temperature": "M2_temperature",
      "M3_temperature": "M3_temperature",
      "trip_number": "trip_number",
      "dist": "dist",
      "trip_completed": "trip_completed",
      "charging_current": "charging_current",
      "regulation_error": "regulation_error",
      "errors_1": "errors_1",
      "errors_2": "errors_2",
      "status_codes": "status_codes"
    }
  },
  inputParamsSchema
}

export default tool