# @open-mcp/just_eat_co_uk

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "just_eat_co_uk": {
      "command": "npx",
      "args": ["-y", "@open-mcp/just_eat_co_uk"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### post_acceptance_requested

### put_attempted_delivery_query_resolved

### get_checkout_tenant_checkoutid_

### patch_checkout_tenant_checkoutid_

### get_checkout_tenant_checkoutid_fulfilment_availabletimes

### get_consumers_tenant_

### post_consumers_tenant_

### get_consumers_tenant_me_communication_preferences

### get_consumers_tenant_me_communication_preferences_type_

### put_consumers_tenant_me_communication_preferences_type_

### delete_consumers_tenant_me_communication_preferences_type_subscr

### post_consumers_tenant_me_communication_preferences_type_subscrib

### put_delivery_failed

### get_delivery_fees_tenant_

### get_delivery_estimate

### get_delivery_pools

### post_delivery_pools

### delete_delivery_pools_deliverypoolid_

### get_delivery_pools_deliverypoolid_

### parameters_delivery_pools_deliverypoolid_

### patch_delivery_pools_deliverypoolid_

### put_delivery_pools_deliverypoolid_

### get_delivery_pools_deliverypoolid_availability_relative

### parameters_delivery_pools_deliverypoolid_availability_relative

### put_delivery_pools_deliverypoolid_availability_relative

### parameters_delivery_pools_deliverypoolid_hours

### put_delivery_pools_deliverypoolid_hours

### delete_delivery_pools_deliverypoolid_restaurants

### parameters_delivery_pools_deliverypoolid_restaurants

### put_delivery_pools_deliverypoolid_restaurants

### put_driver_assigned_to_delivery

### put_driver_at_delivery_address

### put_driver_at_restaurant

### put_driver_has_delivered_order

### put_driver_location

### put_driver_on_their_way_to_delivery_address

### post_late_order_compensation_query

### post_late_order_query

### post_menu_ingestion_complete

### post_order_accepted

### post_order_cancelled

### post_order_eligible_for_restaurant_compensation

### put_order_is_ready_for_pickup

### post_order_ready_for_preparation_async

### post_order_ready_for_preparation_sync

### post_order_rejected

### put_order_requires_delivery_acceptance

### post_order_time_updated

### post_orders

### put_orders_deliverystate_driverlocation

### put_orders_orderid_accept

### put_orders_orderid_cancel

### post_orders_orderid_complete

### x_status_orders_orderid_complete

### put_orders_orderid_deliverystate_atdeliveryaddress

### put_orders_orderid_deliverystate_atrestaurant

### put_orders_orderid_deliverystate_atrestauranteta

### put_orders_orderid_deliverystate_delivered

### put_orders_orderid_deliverystate_driverassigned

### put_orders_orderid_deliverystate_driverlocation

### put_orders_orderid_deliverystate_driverunassigned

### put_orders_orderid_deliverystate_onitsway

### put_orders_orderid_duedate

### put_orders_orderid_ignore

### post_orders_orderid_readyforcollection

### x_status_orders_orderid_readyforcollection

### put_orders_orderid_reject

### post_orders_tenant_orderid_consumerqueries_lateorder_restaurantr

### post_orders_tenant_orderid_consumerqueries_lateordercompensation

### post_orders_tenant_orderid_restaurantqueries_compensation

### put_redelivery_requested

### put_restaurant_offline_status

### put_restaurant_online_status

### searchbylocation

### searchbypostcode

### put_restaurants_driver_eta

### get_restaurants_tenant_restaurantid_catalogue

### get_restaurants_tenant_restaurantid_catalogue_availabilities

### get_restaurants_tenant_restaurantid_catalogue_categories

### get_restaurants_tenant_restaurantid_catalogue_categories_categor

### get_restaurants_tenant_restaurantid_catalogue_items

### get_restaurants_tenant_restaurantid_catalogue_items_itemid_dealg

### get_restaurants_tenant_restaurantid_catalogue_items_itemid_dealg

### get_restaurants_tenant_restaurantid_catalogue_items_itemid_modif

### get_restaurants_tenant_restaurantid_catalogue_items_itemid_varia

### get_restaurants_tenant_restaurantid_customerclaims

### get_restaurants_tenant_restaurantid_customerclaims_id_

### post_restaurants_tenant_restaurantid_customerclaims_id_restauran

### put_restaurants_tenant_restaurantid_customerclaims_id_restaurant

### get_restaurants_tenant_restaurantid_fees

### put_restaurants_tenant_restaurantid_fees

### get_restaurants_tenant_restaurantid_menu

### putmenuforingestion

### getordertimes

### updateordertime

### getrestaurantservicetimes

### putrestaurantservicetimes

### get_search_autocomplete_tenant_

### get_search_restaurants_tenant_

### post_send_to_pos_failed

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/just_eat_co_uk
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/just_eat_co_uk`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
