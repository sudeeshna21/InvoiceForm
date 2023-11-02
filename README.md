##TechStack used
1. Built the app using react.js, material.ui
2. Deployed the app on firebase

##Project Link
https://invoiceform-775a8.web.app/form

##SQL Queries
1.  Select shippers.companyName, COUNT(orders.orderID) as shippedorderscount From orders Join shipper ON Orders.shipperId= shippers.shipperId Group by shippers, shipperName ORDER BY shippedorderscount DESC LIMIT 1
2.   Select
E1.EmployeelD as Employee ID,
E1.lastName as Last Name,
E1.FirstName as first Name,
E2.LastName as ManagerLast Name,
E2.FirstName as Manager first Name FROM Employeer El
LEFT JOIN Employees E2 ON E1.reportsto= E2.EmployeeID
3. Select last Name FROM Employees WHERE MONTH(BirthDale) = 11;
Select E.last Name As Last Name, E. First Name As First Name, To teratory Description As Tentory FROM Employees as E JOIN Employtenities act T on E.EmployeeID=T.Empinge ORDER BY T. to witory Descruption Asc, E.LastName A
