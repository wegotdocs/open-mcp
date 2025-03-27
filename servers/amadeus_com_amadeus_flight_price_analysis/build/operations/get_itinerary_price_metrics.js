import { z } from "zod";
export const toolName = `get_itinerary_price_metrics`;
export const toolDescription = `GET itinerary price metric`;
export const baseUrl = `https://test.api.amadeus.com/v1`;
export const path = `/analytics/itinerary-price-metrics`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "originIataCode": z.string().regex(new RegExp("[a-zA-Z]{3}")).min(3).max(3).describe("airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), from which the traveler will depart\n"), "destinationIataCode": z.string().regex(new RegExp("[a-zA-Z]{3}")).min(3).max(3).describe("airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), to which the traveler is going."), "departureDate": z.string().describe("The date on which the traveler will depart from the origin to go to the destination. \n\nDates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format."), "currencyCode": z.string().regex(new RegExp("[a-zA-Z]{3}")).min(3).max(3).describe("the preferred currency for display. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro"), "oneWay": z.boolean().describe("true to get price metrics for a one way trip,\nfalse to get price metrics for a round trip") }).optional() }).shape;
