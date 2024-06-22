/*CREATED BY: Romana Mudrončíková
  CREATE DATE: 13.06.2024
  DESCRIPTION: top 5 ordering customers by price
 */
 
SELECT 
	c.customer_first_name ||' '||c.customer_last_name AS name,
	c.customer_id,
	SUM(o.order_price) AS 'price_orders'
FROM 
	customers AS c  
LEFT JOIN
	orders AS o
ON 
	c.customer_id = o.customer_id 
GROUP BY
	name, c.customer_id
ORDER BY 
	SUM(o.order_price) DESC 
LIMIT 
5
