import { z } from "zod";
export const toolName = `apps_redeliver_webhook_delivery`;
export const toolDescription = `Redeliver a delivery for an app webhook`;
export const baseUrl = `https://github.com`;
export const path = `/app/hook/deliveries/{delivery_id}/attempts`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "delivery_id": z.number().int() }).optional() }).shape;
