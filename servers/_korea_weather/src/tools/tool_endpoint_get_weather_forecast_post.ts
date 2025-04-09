import { z } from "zod"

export const toolName = `tool_endpoint_get_weather_forecast_post`
export const toolDescription = `Get Weather Forecast`
export const baseUrl = `/korea-weather`
export const path = `/get_weather_forecast`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "location"
  ]
}
export const flatMap = {}

export const inputParams = {
  "location": z.string()
}