import { z } from "zod";
export const toolName = `subaccountadd`;
export const toolDescription = `Ajoute un sous compte`;
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`;
export const path = `/subaccount`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "keyid": z.string(), "subAccountEdit": z.literal("addAccount"), "subAccountLogin": z.string(), "subAccountPassword": z.string() }).optional() }).shape;
