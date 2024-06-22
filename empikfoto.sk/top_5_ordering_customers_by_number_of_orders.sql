/*CREATED BY: Romana Mudrončíková
  CREATE DATE: 13.06.2024
  DESCRIPTION: top 5 ordering customers by number of orders
 */
 
 SELECT 
	c.customer_first_name ||' '||c.customer_last_name AS name,
	c.customer_id,
	COUNT(o.order_id) AS 'number of orders'
 FROM 
	customers AS c  
 LEFT JOIN
	orders AS o
 ON 
	c.customer_id = o.customer_id
GROUP by
	c.customer_id, name
ORDER BY
	COUNT(o.order_id) DESC
LIMIT 
	5

