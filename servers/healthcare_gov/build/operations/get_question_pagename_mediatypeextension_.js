import { z } from "zod";
export const toolName = `get_question_pagename_mediatypeextension_`;
export const toolDescription = `Returns pages content.`;
export const baseUrl = `https://www.healthcare.gov`;
export const path = `/question/{pageName}{mediaTypeExtension}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "mediaTypeExtension": z.literal(".json").describe("Omiting the param causes html to be returned."), "pageName": z.string() }).optional() }).shape;
