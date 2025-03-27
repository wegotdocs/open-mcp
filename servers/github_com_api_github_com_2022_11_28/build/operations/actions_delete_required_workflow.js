import { z } from "zod";
export const toolName = `actions_delete_required_workflow`;
export const toolDescription = `Delete a required workflow`;
export const baseUrl = `https://github.com`;
export const path = `/orgs/{org}/actions/required_workflows/{required_workflow_id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive."), "required_workflow_id": z.number().int().describe("The unique identifier of the required workflow.") }).optional() }).shape;
