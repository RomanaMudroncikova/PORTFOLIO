/*CREATED BY: Romana Mudrončíková
  CREATE DATE: 13.06.2024
  DESCRIPTION: select all customers_id and all order_id, their full_name and order_price
 */

SELECT
	c.customer_id,
	c.customer_first_name ||' '|| c.customer_last_name AS Full_name,
	o.order_price,
	o.order_id
FROM
	customers AS c
LEFT JOIN
	orders AS o
ON 
	c.customer_id=o.customer_id
ORDER BY
	o.order_price DESC,'full_name' 