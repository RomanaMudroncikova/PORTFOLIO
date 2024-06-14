/* CREATED BY: Romana Mudončíková
   CREATE DATE: 13.06.2024
   DESCRIPTION: Select top 3 selling product
*/

SELECT
	p.product_id,
	p.product_name,
	COUNT(o.order_id) AS 'number of selling'
FROM
	orders AS o
INNER JOIN
	product AS p
ON
	p.product_id = o.product_id
GROUP by
	p.product_id 
ORDER by 
	COUNT(o.order_id)DESC, p.product_name
LIMIT 
	3




