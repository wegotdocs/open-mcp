import { z } from "zod";
export const toolName = `post_products_json`;
export const toolDescription = `Create a new Product.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/products.json`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "locale": z.string().describe("Locale code of the translation").optional() }).optional(), "body": z.object({ "product": z.object({ "barcode": z.string().describe("Barcode of the product").optional(), "categories": z.array(z.object({ "id": z.number().int().describe("Unique identifier of the Category").optional(), "name": z.string().describe("Name of the Category").optional(), "parent_id": z.number().int().describe("Unique identifier of the Parent Category").optional(), "permalink": z.string().describe("Category unique URL path").optional() })).optional(), "description": z.string().describe("Description of the product").optional(), "diameter": z.number().describe("Diameter of the product").optional(), "featured": z.boolean().describe("True if the product is featured"), "google_product_category": z.string().describe("Category of a Product based on the Google product taxonomy").optional(), "height": z.number().describe("Height of the product").optional(), "length": z.number().describe("Length of the product").optional(), "meta_description": z.string().describe("SEO meta description of the product").optional(), "name": z.string().describe("Name of the product"), "package_format": z.enum(["box", "cylinder"]).describe("Format the product package"), "page_title": z.string().describe("SEO title of the product").optional(), "permalink": z.string().describe("Product unique URL path").optional(), "price": z.number().describe("Price of the product"), "shipping_required": z.boolean().describe("False if the product is digital"), "sku": z.string().describe("Stock Keeping Unit of the product").optional(), "status": z.enum(["available", "not-available", "disabled"]).describe("Status of the product"), "stock": z.number().int().describe("Quantity in stock for the product"), "stock_unlimited": z.boolean().describe("True if the Product has unlimited stock").optional(), "weight": z.number().describe("Weight of the product"), "width": z.number().describe("Width of the product").optional() }).optional() }).optional() }).shape;
