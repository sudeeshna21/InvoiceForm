##TechStack used
1. Built the app using react.js, material.ui
2. Deployed the app on firebase

##Project Link
https://invoiceform-775a8.web.app/form

##SQL Queries
1.  Select shippers.companyName, COUNT(orders.orderID) as shippedorderscount From orders Join shipper ON Orders.shipperId= shippers.shipperId Group by shippers, shipperName ORDER BY shippedorderscount DESC LIMIT 1
2. Select
E1.EmployeelD as Employee ID,
E1.lastName as Last Name,
E1.FirstName as first Name,
E2.LastName as ManagerLast Name,
E2.FirstName as Manager first Name FROM Employeer El
LEFT JOIN Employees E2 ON E1.reportsto= E2.EmployeeID
3. Select last Name FROM Employees WHERE MONTH(BirthDale) = 11;
4. Select E.last Name As Last Name, E. First Name As First Name, T.territoryDescription As Territory FROM Employees as E JOIN territories as T on E.EmployeeID=T.EmployeeId ORDER BY T. to TerritoryDescription Asc, E.LastName Asc;
5. Select Top 1 P. ProductName as BestsellingProduct, SUM(S.SalesAmount) as TotalSalesValue FROM Products As P JOIN Sales AS S ON P.ProductID= S.ProductID GROUP BY P.ProductName ORDER BY TotalSales Value DESC;
6. Select Top 1 P.ProductName As WorstsellingProduct, ISNULL(SUM(S.SalesAmount), 0) As TotalsalesValue
FROM Products AS P
LEFT JOIN Sales As S ON P.ProductID= s.ProductID
GROUP BY P.ProductName
ORDER BY TotalSalesValue ASC;
7. Select Extract(MONTH FROM OrderDate) As SalesMonth SUM(SalesAmount) as TotalSales FROM Sales GROUP BY Extract (Month from OrderDate) Order By TotalSales DESC LIMIT 1
8. Select E. First Name As SalespersonFirstName, E.Last Name As SalesPersonLastName, SUM(S.SalesAmount) As TotalSalesAmount from Sales as s
join Employees as E on S.EmployeeID = E.EmployeeID GROUP BY E.FirstName, E.LastName ORDER BY TotalSalesAmount DESC LIMIT 1
9. Select P.ProductID, P.ProductName, S.SuppliersName,, PC.Product Category FROM Products AS P JOIN Suppliers As S ON P.SupplierID= S.SupplierID JOIN ProductCategories As PC on P.categoryID=PC.CategoryID
ORDER BY PC.ProductCategory
10. Select SaleRegion, COUNT(*) As EmployeeCount FROM Employees GROUP BY SalesRegion;
11. Select Region, SUM(SalesAmount) As Totalsales FROM Sales GROUP BY Region;
12. Select AVG(Sales Amount) As Averagesales Order Value FROM Sales;
13. Select 0.OrderID,O.OrderDate,CONCAT(C.FirstName,' ',C.LastName) As CustomerName FROM Orders AS O
JOIN Customers As C ON O.CustomesID= C.CustomerID
WHERE (SELECT AVG(SalesAmount) FROM sales) <
(SELECT SUM(SO.SalesAmount) FROM Sales AS SO WHERE SO.OrderID = 0.OrderID);
14. SELECT C.CustomerID, CONCAT(C.FIRSTNAME,'', C.LastName) As Customer Name COALESCE (SUM(S.SalesAmount), 0) As TotalSales FROM Customers As C
LEFT JOIN Sales As S on C.CustomerID = S.CustomerID GROUP BY C.CustomerID, C.FirstName, C.LastName
15. SELECT ProductID, ProductName, UnitsInStock, Reorderlevel From  Products where Unitsinstock < ReorderLevel AND Discontinued=0;




