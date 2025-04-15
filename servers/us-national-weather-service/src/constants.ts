export const OPENAPI_URL = "https://api.weather.gov/openapi.json"
export const SERVER_NAME = "us-national-weather-service"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/alerts_query/index.js",
  "./tools/alerts_active/index.js",
  "./tools/alerts_active_count/index.js",
  "./tools/alerts_active_zone/index.js",
  "./tools/parameters_alerts_active_zone_zoneid_/index.js",
  "./tools/alerts_active_area/index.js",
  "./tools/parameters_alerts_active_area_area_/index.js",
  "./tools/alerts_active_region/index.js",
  "./tools/parameters_alerts_active_region_region_/index.js",
  "./tools/alerts_types/index.js",
  "./tools/alerts_single/index.js",
  "./tools/parameters_alerts_id_/index.js",
  "./tools/cwsu/index.js",
  "./tools/cwas/index.js",
  "./tools/cwa/index.js",
  "./tools/sigmetquery/index.js",
  "./tools/sigmetsbyatsu/index.js",
  "./tools/sigmetsbyatsubydate/index.js",
  "./tools/sigmet/index.js",
  "./tools/glossary/index.js",
  "./tools/gridpoint/index.js",
  "./tools/parameters_gridpoints_wfo_x_y_/index.js",
  "./tools/gridpoint_forecast/index.js",
  "./tools/parameters_gridpoints_wfo_x_y_forecast/index.js",
  "./tools/gridpoint_forecast_hourly/index.js",
  "./tools/parameters_gridpoints_wfo_x_y_forecast_hourly/index.js",
  "./tools/gridpoint_stations/index.js",
  "./tools/parameters_gridpoints_wfo_x_y_stations/index.js",
  "./tools/icons/index.js",
  "./tools/parameters_icons_set_timeofday_first_/index.js",
  "./tools/iconsdualcondition/index.js",
  "./tools/parameters_icons_set_timeofday_first_second_/index.js",
  "./tools/icons_summary/index.js",
  "./tools/satellite_thumbnails/index.js",
  "./tools/parameters_thumbnails_satellite_area_/index.js",
  "./tools/station_observation_list/index.js",
  "./tools/parameters_stations_stationid_observations/index.js",
  "./tools/station_observation_latest/index.js",
  "./tools/parameters_stations_stationid_observations_latest/index.js",
  "./tools/station_observation_time/index.js",
  "./tools/parameters_stations_stationid_observations_time_/index.js",
  "./tools/tafs/index.js",
  "./tools/taf/index.js",
  "./tools/obs_stations/index.js",
  "./tools/obs_station/index.js",
  "./tools/parameters_stations_stationid_/index.js",
  "./tools/office/index.js",
  "./tools/parameters_offices_officeid_/index.js",
  "./tools/office_headline/index.js",
  "./tools/parameters_offices_officeid_headlines_headlineid_/index.js",
  "./tools/office_headlines/index.js",
  "./tools/parameters_offices_officeid_headlines/index.js",
  "./tools/point/index.js",
  "./tools/parameters_points_point_/index.js",
  "./tools/point_stations/index.js",
  "./tools/parameters_points_point_stations/index.js",
  "./tools/radar_servers/index.js",
  "./tools/radar_server/index.js",
  "./tools/parameters_radar_servers_id_/index.js",
  "./tools/radar_stations/index.js",
  "./tools/radar_station/index.js",
  "./tools/parameters_radar_stations_stationid_/index.js",
  "./tools/radar_station_alarms/index.js",
  "./tools/parameters_radar_stations_stationid_alarms/index.js",
  "./tools/radar_queue/index.js",
  "./tools/parameters_radar_queues_host_/index.js",
  "./tools/radar_profiler/index.js",
  "./tools/parameters_radar_profilers_stationid_/index.js",
  "./tools/products_query/index.js",
  "./tools/product_locations/index.js",
  "./tools/product_types/index.js",
  "./tools/product/index.js",
  "./tools/parameters_products_productid_/index.js",
  "./tools/products_type/index.js",
  "./tools/parameters_products_types_typeid_/index.js",
  "./tools/products_type_locations/index.js",
  "./tools/parameters_products_types_typeid_locations/index.js",
  "./tools/location_products/index.js",
  "./tools/parameters_products_locations_locationid_types/index.js",
  "./tools/products_type_location/index.js",
  "./tools/parameters_products_types_typeid_locations_locationid_/index.js",
  "./tools/zone_list/index.js",
  "./tools/zone_list_type/index.js",
  "./tools/parameters_zones_type_/index.js",
  "./tools/zone/index.js",
  "./tools/parameters_zones_type_zoneid_/index.js",
  "./tools/zone_forecast/index.js",
  "./tools/parameters_zones_type_zoneid_forecast/index.js",
  "./tools/zone_obs/index.js",
  "./tools/parameters_zones_forecast_zoneid_observations/index.js",
  "./tools/zone_stations/index.js",
  "./tools/parameters_zones_forecast_zoneid_stations/index.js"
]