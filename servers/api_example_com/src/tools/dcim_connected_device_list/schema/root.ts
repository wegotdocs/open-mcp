import { z } from "zod"

export const inputParamsSchema = {
  "peer_device": z.string().describe("The name of the peer device"),
  "peer_interface": z.string().describe("The name of the peer interface")
}