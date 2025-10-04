// Function to open the modal and populate artwork details
function openPurchaseModal(title, price) {
    const modal = document.getElementById('purchase-modal');
    
    // Set the text fields in the modal
    document.getElementById('art-title-placeholder').textContent = title;
    document.getElementById('art-price-placeholder').textContent = `Price: ${price}`;
    
    // Set the hidden input fields to be sent in the email
    document.getElementById('hidden-art-title').value = title;
    document.getElementById('hidden-art-price').value = price;

    modal.style.display = 'block';
}

// Function to close the modal
function closePurchaseModal() {
    const modal = document.getElementById('purchase-modal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('purchase-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
