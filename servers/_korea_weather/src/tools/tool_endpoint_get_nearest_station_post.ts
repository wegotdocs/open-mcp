import { z } from "zod"

export const toolName = `tool_endpoint_get_nearest_station_post`
export const toolDescription = `Get Nearest Station`
export const baseUrl = `/korea-weather`
export const path = `/get_nearest_station`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "latitude",
    "longitude"
  ]
}
export const flatMap = {}

export const inputParams = {
  "latitude": z.number(),
  "longitude": z.number()
}