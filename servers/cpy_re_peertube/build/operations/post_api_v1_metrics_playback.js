import { z } from "zod";
export const toolName = `post_api_v1_metrics_playback`;
export const toolDescription = `Create playback metrics`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/metrics/playback`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.any().optional() }).shape;
