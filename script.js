function showMoreInfo() {
    const productInfoSection = document.getElementById('product-info');
    
    // Alterna entre mostrar e esconder a seção de informações do produto
    if (productInfoSection.classList.contains('hidden')) {
        productInfoSection.classList.remove('hidden');
    } else {
        productInfoSection.classList.add('hidden');
    }
}
