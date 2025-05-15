import { z } from "zod"

export const inputParamsSchema = {
  "action": z.enum(["restart","restart_all","pause","pause_all","resume","resume_all"]).describe("The action to be performed.").optional(),
  "containerId": z.string().describe("The ID of the Runtime, Runtime cluster, or Runtime cloud to which you deploy the listener or listeners.").optional(),
  "listenerId": z.string().describe("The ID of a single listener process whose status you want to change. To change the status of all listeners, omit this parameter. \n\n >**Note:** You can obtain the ID for a listener process by using a QUERY operation on the Process object.").optional()
}