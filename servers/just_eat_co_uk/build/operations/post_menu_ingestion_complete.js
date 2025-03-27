import { z } from "zod";
export const toolName = `post_menu_ingestion_complete`;
export const toolDescription = `Menu ingestion complete`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/menu-ingestion-complete`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "correlationId": z.string().describe("The ID of the execution which has been completed").optional(), "fault": z.object({ "errors": z.array(z.object({ "code": z.string().describe("An alphanumeric code for the error").optional(), "description": z.string().describe("A description of the error to help you resolve the issue").optional() })).describe("Details of errors which caused the fault").optional(), "id": z.string().describe("A unique ID for the fault").optional() }).describe("Details of the fault which caused the menu ingestion to fail. This is only present if menu ingestion did not complete successfully").optional(), "restaurantId": z.string().describe("The Just Eat restaurant ID").optional(), "result": z.enum(["success", "fail"]).describe("The result of the menu ingestion process").optional(), "tenant": z.enum(["au", "dk", "es", "ie", "it", "no", "uk", "nz"]).describe("Country code for the market the restaurant is in").optional(), "timestamp": z.string().datetime({ offset: true }).describe("The ISO-8601 datetime at which the menu ingestion completed").optional() }).optional() }).shape;
