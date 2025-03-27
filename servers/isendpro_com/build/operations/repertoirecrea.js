import { z } from "zod";
export const toolName = `repertoirecrea`;
export const toolDescription = `Gestion repertoire (creation)`;
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`;
export const path = `/repertoire`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "keyid": z.string().describe("Clé API"), "repertoireEdit": z.literal("create").describe("Action à réaliser doit valoir \"create\" ici."), "repertoireNom": z.string().describe("Nom du répertoire (libellé) à créer") }).optional() }).shape;
