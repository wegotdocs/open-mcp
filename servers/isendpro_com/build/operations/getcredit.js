import { z } from "zod";
export const toolName = `getcredit`;
export const toolDescription = `Interrogation credit`;
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`;
export const path = `/credit`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "keyid": z.string().describe("Clé API"), "credit": z.enum(["1", "2"]).describe("Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité") }).optional() }).shape;
