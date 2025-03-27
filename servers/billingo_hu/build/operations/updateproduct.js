import { z } from "zod";
export const toolName = `updateproduct`;
export const toolDescription = `Update a product`;
export const baseUrl = `https://api.billingo.hu/v3`;
export const path = `/products/{id}`;
export const method = `put`;
export const security = [
    {
        "key": "X-API-KEY",
        "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-API-KEY"
    }
];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int() }).optional(), "body": z.object({ "comment": z.string().optional(), "currency": z.enum(["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "LTL", "LVL", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RSD", "RUB", "SEK", "SGD", "THB", "TRY", "UAH", "USD", "ZAR"]), "general_ledger_number": z.string().optional(), "general_ledger_taxcode": z.string().optional(), "id": z.number().int().readonly().optional(), "name": z.string(), "net_unit_price": z.number().optional(), "unit": z.string(), "vat": z.enum(["0%", "1%", "10%", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "18%", "19%", "2%", "20%", "21%", "22%", "23%", "24%", "25%", "26%", "27%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "AAM", "AM", "EU", "EUK", "F.AFA", "FAD", "K.AFA", "MAA", "TAM", "ÁKK", "ÁTHK"]) }).optional() }).shape;
