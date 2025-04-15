import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string().describe("The app ID"),
  "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only.")
}