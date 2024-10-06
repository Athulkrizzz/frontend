// Simulate order status update (in a real scenario, this would come from the server)
function updateOrderStatus(status) {
    alert(`Order Status: ${status}`);
  }
  
  // Simulate admin status updates (e.g., 'Order Received', 'In Kitchen', 'Out for Delivery')
  setTimeout(() => updateOrderStatus('Order Received'), 3000);
  setTimeout(() => updateOrderStatus('In Kitchen'), 6000);
  setTimeout(() => updateOrderStatus('Out for Delivery'), 9000);