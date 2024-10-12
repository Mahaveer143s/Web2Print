const discountSelect = document.getElementById('discountSelect');
const discountInput = document.getElementById('selectedDiscount');

discountSelect.addEventListener('change', (event) => {
    const selectedDiscount = event.target.value;
    discountInput.value = selectedDiscount; // Fill input with selected discount
});