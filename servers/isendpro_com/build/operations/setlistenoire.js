import { z } from "zod";
export const toolName = `setlistenoire`;
export const toolDescription = `Ajoute un numero en liste noire`;
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`;
export const path = `/setlistenoire`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "keyid": z.string().describe("Clé API"), "setlisteNoire": z.literal("1").describe("Doit valoir \"1\""), "num": z.string().describe("numéro de mobile à insérer en liste noire") }).optional() }).shape;
