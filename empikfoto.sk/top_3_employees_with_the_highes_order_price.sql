/* CREATED BY: Romana Mudončíková
   CREATE DATE: 13.06.2024
   DESCRIPTION: Select top 3 employees with the highes order_price
*/

SELECT
	e.employee_id,
	e.first_name AS 'First name',
	e.last_name AS 'Last name',
	(SUM(o.order_price)) AS 'full order price'
FROM 
	employee AS e
LEFT JOIN
	orders AS o 
ON
	e.employee_id = o.employee_id
GROUP BY 
	e.employee_id
ORDER BY
	(SUM(o.order_price)) DESC
LIMIT 
	3
