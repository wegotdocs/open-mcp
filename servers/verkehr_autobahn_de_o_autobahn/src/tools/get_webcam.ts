import { z } from "zod"

export const toolName = `get_webcam`
export const toolDescription = `Details einer Webcam`
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`
export const path = `/details/webcam/{webcamId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "webcamId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "webcamId": z.string()
}