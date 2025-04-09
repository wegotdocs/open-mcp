import { z } from "zod"

export const inputParams = {
  "device_ids": z.array(z.string()).describe("A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:[\"74ASZWbe4lXaubB36ztrGX\"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_\n"),
  "play": z.boolean().describe("**true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.\n").optional()
}