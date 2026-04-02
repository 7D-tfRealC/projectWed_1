 const iphoneList = [
            { name: "iPhone 17 Pro 256GB | CHÍNH HÃNG", price: "34.790.000đ", oldPrice: "34.900.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png" },
            { name: "iPhone 17 Pro  Max 256GB | CHÍNH HÃNG", price: "37.790.000đ", oldPrice: "37.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg" },
            { name: "iPhone 17 256GB | CHÍNH HÃNG", price: "24.690.000đ", oldPrice: "24.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg" },
            { name: "iPhone Air 256GB | CHÍNH HÃNG", price: "24.990.000đ", oldPrice: "31.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_air-3_2.jpg" },
            { name: "iPhone 17e 256GB CHÍNH HÃNG", price: "17.790.000đ", oldPrice: "17.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_17e_pink_1.png" },
            { name: "iPhone 17 Pro Max 512GB | CHÍNH HÃNG", price: "43.990.000đ", oldPrice: "44.490.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-cam_3.jpg" },
            { name: "iPhone 16 Pro 256GB | CHÍNH HÃNG", price: "30.990.000đ", oldPrice: "34.900.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png" },
            { name: "iPhone 15 128GB | CHÍNH HÃNG VN/A", price: "17.990.000đ", oldPrice: "19.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png" },
            { name: "iPhone 16 128GB | CHÍNH HÃNG VN/A", price: "26.590.000đ", oldPrice: "28.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png" },
            { name: "iPhone 16e 128GB | CHÍNH HÃNG VN/A", price: "12.490.000đ", oldPrice: "16.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16e-128gb.png" },
            { name: "iPhone 14 Pro Max 128GB CHÍNH HÃNG VN/A", price: "25.590.000đ", oldPrice: "29.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png" },
            { name: "iPhone 14 128GB | CHÍNH HÃNG VN/A", price: "13.990.000đ", oldPrice: "14.490.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_2_1.jpg" },
            { name: "iPhone 16 Pro Max 512GB | CHÍNH HÃNG VN/A", price: "37.390.000đ", oldPrice: "40.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max_1.png" },
            { name: "iPhone 16 128GB | CHÍNH HÃNG VN/A", price: "21.090.000đ", oldPrice: "22.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png" },
            { name: "iPhone 16 Pro Max 512GB | CHÍNH HÃNG VN/A", price: "37.390.000đ", oldPrice: "40.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max_1.png" },
            { name: "iPhone 15 Plus 128GB | CHÍNH HÃNG VN/A", price: "17.690.000đ", oldPrice: "22.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png" },
            { name: "iPhone 13 128GB | CHÍNH HÃNG VN/A", price: "11.990.000đ", oldPrice: "13.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_2.jpg" },
            { name: "iPhone 15 256GB | CHÍNH HÃNG VN/A", price: "20.790.000đ", oldPrice: "22.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb_3.png" },
            { name: "iPhone 17 Pro 512GB | CHÍNH HÃNG VN/A", price: "40.990.000đ", oldPrice: "41.490.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_17_pro_512gb.jpg" },
            { name: "iPhone 16 Pro 256GB | CHÍNH HÃNG VN/A", price: "28.590.000đ", oldPrice: "31.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro.png" },



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