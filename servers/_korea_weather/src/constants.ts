export const OPENAPI_URL = "https://kcdassistant.duckdns.org/fastapi/korea-weather/openapi.json"
export const SERVER_NAME = "_korea_weather"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/tool_endpoint_get_current_weather_post.js",
  "./tools/tool_endpoint_list_weather_stations_post.js",
  "./tools/tool_endpoint_get_weather_forecast_post.js",
  "./tools/tool_endpoint_get_nearest_station_post.js",
  "./tools/tool_endpoint_get_air_quality_post.js",
  "./tools/tool_endpoint_get_air_quality_by_station_post.js"
]