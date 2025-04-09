import { z } from "zod";
export const inputParams = {
    "city": z.string().describe("The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.").optional(),
    "country": z.string().describe("The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**."),
    "houseNumberOrName": z.string().describe("The number or name of the house.").optional(),
    "postalCode": z.string().describe("The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.").optional(),
    "stateOrProvince": z.string().describe("The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided. \n\nMaximum length:\n\n* 2 characters for addresses in the US or Canada.\n\n* 3 characters for all other countries.\n").optional(),
    "street": z.string().describe("The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.").optional()
};
