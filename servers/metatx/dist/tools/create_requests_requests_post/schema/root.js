import { z } from "zod";
export const inputParams = {
    "contract_id": z.string().uuid().optional(),
    "contract_address": z.string().optional(),
    "specifications": z.array(z.object({ "caller": z.string(), "method": z.string(), "call_request_type": z.string(), "request_id": z.string(), "parameters": z.record(z.any()) })).optional(),
    "ttl_days": z.number().int().optional(),
    "live_at": z.number().int().optional()
};
