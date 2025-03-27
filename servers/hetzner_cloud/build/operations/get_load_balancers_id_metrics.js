import { z } from "zod";
export const toolName = `get_load_balancers_id_metrics`;
export const toolDescription = `Get Metrics for a LoadBalancer`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/load_balancers/{id}/metrics`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Load Balancer") }).optional(), "query": z.object({ "type": z.enum(["open_connections", "connections_per_second", "requests_per_second", "bandwidth"]).describe("Type of metrics to get"), "start": z.string().describe("Start of period to get Metrics for (in ISO-8601 format)"), "end": z.string().describe("End of period to get Metrics for (in ISO-8601 format)"), "step": z.string().describe("Resolution of results in seconds").optional() }).optional() }).shape;
