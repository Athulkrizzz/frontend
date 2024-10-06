
  
  // Simulate stock reduction after each order (for demo purposes)
function reduceStock(item) {
    const stockRow = document.querySelector(`#${item} .stock`);
    let currentStock = parseInt(stockRow.textContent);
    currentStock = currentStock > 0 ? currentStock - 1 : 0;
    stockRow.textContent = currentStock;
    
    if (currentStock < 10) {
      alert(`${item} stock is low! Please restock.`);
    }
  }
  
  // Simulate inventory updates after placing an order
  setTimeout(() => reduceStock('pizzaBase'), 3000);
  setTimeout(() => reduceStock('sauce'), 6000);
  setTimeout(() => reduceStock('cheese'), 9000);
  