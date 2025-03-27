import { z } from "zod";
export const toolName = `solveclusteringproblem`;
export const toolDescription = `POST Cluster Endpoint`;
export const baseUrl = `https://graphhopper.com/api/1`;
export const path = `/cluster`;
export const method = `post`;
export const security = [
    {
        "key": "key",
        "value": "<mcp-env-var>KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "KEY",
        "schemeType": "apiKey",
        "schemeName": "key"
    }
];
export const inputParams = z.object({ "body": z.object({ "configuration": z.object({ "clustering": z.object({ "max_quantity": z.number().describe("Specifies max. quantity in a cluster").optional(), "min_quantity": z.number().describe("Specifies min. quantity in a cluster").optional(), "num_clusters": z.number().describe("Specifies the number of clusters").optional() }).optional(), "response_type": z.string().describe("Specifies the response format. You can either choose `geojson` or `json`."), "routing": z.object({ "cost_per_meter": z.number().describe("Cost per meter (travel distance)").optional(), "cost_per_second": z.number().describe("Cost per second (travel time)").optional(), "profile": z.string().describe("The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap)").optional() }).optional() }).optional(), "customers": z.array(z.object({ "address": z.object({ "lat": z.number().describe("Latitude").optional(), "lon": z.number().describe("Longitude").optional(), "street_hint": z.string().describe("Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.").optional() }).optional(), "id": z.string().describe("id of customer").optional(), "quantity": z.number().describe("demand of customer").optional() })).optional() }).optional() }).shape;
