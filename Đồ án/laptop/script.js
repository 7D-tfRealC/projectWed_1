const iphoneList = [
    { name: "MacBook Air M4 13 inch 2025 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam", price: "29.890.000đ", oldPrice: "31.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__4_1.png" },
    { name: "MacBook Air M4 13 inch 2025 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam", price: "29.890.000đ", oldPrice: "31.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__4_1.png" },
    { name: "Laptop MSI Prestige 13 AI+ Ukiyoe Edition A2VMG-075VN", price: "44.990.000đ", oldPrice: "47.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_881_1.png" },
    { name: "Mac mini M4 2024 10CPU 10GPU 16GB 256GB | Chính hãng Apple Việt Nam", price: "14.990.000đ", oldPrice: "14.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_7_1.png" },
    { name: "Laptop Acer Gaming Nitro ProPanel ANV15-41-R7CR", price: "26.090.000đ", oldPrice: "32.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_70.png" },
    { name: "MacBook Air M4 13 inch 2025 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam", price: "29.890.000đ", oldPrice: "31.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__4_1.png" },
    { name: "MacBook Pro 14 M5 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam", price: "41.490.000đ", oldPrice: "41.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_13.png" },
    { name: "Laptop HP OmniBook 7 14-FR0033TU C1MN2PA", price: "24.890.000đ", oldPrice: "25.190.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_105.png" },



];

const grid = document.getElementById('iphone-grid');
iphoneList.forEach(p => {
    grid.innerHTML += `
                <div class="col">
                    <div class="card h-100 product-card p-2 border shadow-sm">
                        <img src="${p.img}" class="card-img-top p-2" alt="${p.name}">
                        <div class="card-body px-0 text-center">
                            <h6 class="card-title fw-bold" style="font-size: 14px;">${p.name}</h6>
                            <p class="text-danger fw-bold mb-1">${p.price}</p>
                            <small class="text-muted text-decoration-line-through">${p.oldPrice}</small>
                            <button class="btn btn-primary btn-sm w-100 mt-3" style="background: #004AAD; border:none;">Mua ngay</button>
                        </div>
                    </div>
                </div>
            `;
});