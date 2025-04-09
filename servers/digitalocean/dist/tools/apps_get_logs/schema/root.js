import { z } from "zod";
export const inputParams = {
    "app_id": z.string().describe("The app ID"),
    "deployment_id": z.string().describe("The deployment ID"),
    "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only."),
    "follow": z.boolean().describe("Whether the logs should follow live updates.").optional(),
    "type": z.enum(["UNSPECIFIED", "BUILD", "DEPLOY", "RUN", "RUN_RESTARTED"]).describe("The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime"),
    "pod_connection_timeout": z.string().describe("An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.").optional()
};
