// 1. Khai báo danh sách sản phẩm (Dữ liệu chuẩn)
const products = [
    { 
        name: "iPhone 15 Pro Max 256GB", 
        category: "iPhone", // Đã sửa lỗi chính tả
        price: "28.990.000đ", 
        oldPrice: "32.000.000đ", 
        img: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumb-600x600.jpg",
        bought: 150,
        installment: "Góp 0%"
    },
    { 
        name: "Iphone 17 Pro 256GB | Chính Hãng", 
        category: "iPhone", // Nếu là điện thoại Đạt đổi lại thành "iPhone" nhé
        price: "34.790.000đ", 
        oldPrice: "34.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png",
        bought: 85,
        installment: "Góp 0%"
    },
    { 
        name: "Iphone 17 Pro Max 256GB | Chính Hãng", 
        category: "iPhone", 
        price: "37.490.000đ", 
        oldPrice: "37.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png",
        bought: 210,
        installment: "Góp 0%"
    },
    { 
        name: "iPhone 15 128GB | Chính Hãng", 
        category: "iPhone", // Thêm đầy đủ phân loại
        price: "17.990.000đ", 
        oldPrice: "19.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
        bought: 150,
        installment: "Góp 0%"
    },
    { 
        name: "Macbook Air M3 2024", 
        category: "Laptop", 
        price: "27.490.000đ", 
        oldPrice: "33.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_23__2.png",
        bought: 85,
        installment: "Góp 0%"
    },
    { 
        name: "Laptop ASUS TUF Gaming F16 FX607VJ-RL034W", 
        category: "Laptop", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "22.490.000đ", 
        oldPrice: "24.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_36.png",
        bought: 210,
        installment: "Góp 0%"
    },
    { 
        name: "Laptop ASUS Vivobook S 14 FLIP TP3402VA-LZ632W", 
        category: "Laptop", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "19.490.000đ", 
        oldPrice: "20.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_789.png",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "Laptop Acer Gaming Aspire 7 A715-59G-57TU", 
        category: "Laptop", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "19.490.000đ", 
        oldPrice: "23.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_1__4_8.png",
        bought: 80,
        installment: "Góp 0%"
    }
    ,
    //ipad
    { 
        name: "iPad mini 7 2024 Wifi 128GB | Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "13.590.000đ", 
        oldPrice: "13.900.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_13_7.png",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "iPad Pro chip M5 11 inch Wifi 256GB | Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "29.490.000đ", 
        oldPrice: "29.900.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-pro-m5.jpg",
        bought: 28,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "iPad Air 5 10.9 inch (2022) WIFI 64GB I Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "12.490.000đ", 
        oldPrice: "16.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-5.png",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "iPad A16 Wifi 128GB 2025 | Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "9.490.000đ", 
        oldPrice: "9.900.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-a16-11-inch_10_.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC TTG GAMING i5 12400F - 16GB DDR4- RTX 5060 8GB OC WHITE (Cấu hình gốc)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "25.490.000đ", 
        oldPrice: "25.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1072100124_dsc09857_copy.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC AMD GAMING Ryzen 7 5700X - RTX 3050 6GB (All NEW - Bảo hành 36 tháng)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "17.490.000đ", 
        oldPrice: "17.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1058176674_dsc01548_copy_782b96954a60457bba30f2b9741f7a70.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC AMD GAMING Ryzen 7 5700X - RTX 3050 6GB (All NEW - Bảo hành 36 tháng)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "17.490.000đ", 
        oldPrice: "17.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1058176674_dsc01548_copy_782b96954a60457bba30f2b9741f7a70.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC AMD GAMING Ryzen 7 5700X - RTX 3050 6GB (All NEW - Bảo hành 36 tháng)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "17.490.000đ", 
        oldPrice: "17.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1058176674_dsc01548_copy_782b96954a60457bba30f2b9741f7a70.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "iPhone 15 Pro Max 256GB", 
        category: "iPhone", // Đã sửa lỗi chính tả
        price: "28.990.000đ", 
        oldPrice: "32.000.000đ", 
        img: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumb-600x600.jpg",
        bought: 150,
        installment: "Góp 0%"
    },
    { 
        name: "Iphone 17 Pro 256GB | Chính Hãng", 
        category: "iPhone", // Nếu là điện thoại Đạt đổi lại thành "iPhone" nhé
        price: "34.790.000đ", 
        oldPrice: "34.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png",
        bought: 85,
        installment: "Góp 0%"
    },
    { 
        name: "Iphone 17 Pro Max 256GB | Chính Hãng", 
        category: "iPhone", 
        price: "37.490.000đ", 
        oldPrice: "37.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png",
        bought: 210,
        installment: "Góp 0%"
    },
    { 
        name: "iPhone 15 128GB | Chính Hãng", 
        category: "iPhone", // Thêm đầy đủ phân loại
        price: "17.990.000đ", 
        oldPrice: "19.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
        bought: 150,
        installment: "Góp 0%"
    },
    { 
        name: "Macbook Air M3 2024", 
        category: "Laptop", 
        price: "27.490.000đ", 
        oldPrice: "33.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_23__2.png",
        bought: 85,
        installment: "Góp 0%"
    },
    { 
        name: "Laptop ASUS TUF Gaming F16 FX607VJ-RL034W", 
        category: "Laptop", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "22.490.000đ", 
        oldPrice: "24.990.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_36.png",
        bought: 210,
        installment: "Góp 0%"
    },
    { 
        name: "Laptop ASUS Vivobook S 14 FLIP TP3402VA-LZ632W", 
        category: "Laptop", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "19.490.000đ", 
        oldPrice: "20.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_789.png",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "Laptop Acer Gaming Aspire 7 A715-59G-57TU", 
        category: "Laptop", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "19.490.000đ", 
        oldPrice: "23.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_1__4_8.png",
        bought: 80,
        installment: "Góp 0%"
    }
    ,
    //ipad
    { 
        name: "iPad mini 7 2024 Wifi 128GB | Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "13.590.000đ", 
        oldPrice: "13.900.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_13_7.png",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "iPad Pro chip M5 11 inch Wifi 256GB | Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "29.490.000đ", 
        oldPrice: "29.900.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-pro-m5.jpg",
        bought: 28,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "iPad Air 5 10.9 inch (2022) WIFI 64GB I Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "12.490.000đ", 
        oldPrice: "16.000.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-5.png",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "iPad A16 Wifi 128GB 2025 | Chính hãng Apple Việt Nam", 
        category: "iPad", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "9.490.000đ", 
        oldPrice: "9.900.000đ", 
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-a16-11-inch_10_.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC TTG GAMING i5 12400F - 16GB DDR4- RTX 5060 8GB OC WHITE (Cấu hình gốc)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "25.490.000đ", 
        oldPrice: "25.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1072100124_dsc09857_copy.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC AMD GAMING Ryzen 7 5700X - RTX 3050 6GB (All NEW - Bảo hành 36 tháng)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "17.490.000đ", 
        oldPrice: "17.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1058176674_dsc01548_copy_782b96954a60457bba30f2b9741f7a70.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC AMD GAMING Ryzen 7 5700X - RTX 3050 6GB (All NEW - Bảo hành 36 tháng)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "17.490.000đ", 
        oldPrice: "17.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1058176674_dsc01548_copy_782b96954a60457bba30f2b9741f7a70.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
    { 
        name: "PC AMD GAMING Ryzen 7 5700X - RTX 3050 6GB (All NEW - Bảo hành 36 tháng)", 
        category: "PC", // Nhóm tạm vào iPhone hoặc tạo nút OPPO tùy Đạt
        price: "17.490.000đ", 
        oldPrice: "17.900.000đ", 
        img: "https://ttgshop.vn/media/product/250_1058176674_dsc01548_copy_782b96954a60457bba30f2b9741f7a70.jpg",
        bought: 22,
        installment: "Góp 0%"
    }
    ,
];

// 2. Hàm vẽ sản phẩm ra màn hình (Gom vào hàm để tái sử dụng)
function displayProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ""; // Xóa sạch card cũ đi trước khi vẽ mới

    filteredProducts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'col-6 col-md-4 col-lg-3 mb-3'; // Giữ class chia cột chuẩn của Đạt
        card.innerHTML = `
            <div class="card h-100 product-card p-2 border position-relative">
                <span class="badge bg-danger position-absolute top-0 end-0 m-2">-${Math.floor(Math.random() * 10 + 5)}%</span>
                <img src="${p.img}" class="card-img-top p-2" alt="${p.name}">
                <div class="card-body px-0">
                    <h6 class="card-title fw-bold" style="font-size: 14px; height: 40px; overflow: hidden;">${p.name}</h6>
                    <p class="text-danger fw-bold mb-1">${p.price} <br> <small class="text-muted text-decoration-line-through" style="font-size: 12px;">${p.oldPrice}</small></p>
                    <div class="d-flex justify-content-between" style="font-size: 11px;">
                        <span><i class="fa fa-user"></i> ${p.bought} mua</span>
                        <span class="badge bg-light text-dark border">${p.installment}</span>
                    </div>
                    <button class="btn btn-primary btn-sm w-100 mt-3 btn-add-cart" style="background: #004AAD;">Thêm vào giỏ</button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // Sau khi vẽ xong, phải kích hoạt lại sự kiện nút Giỏ hàng
    setupCartButtons();
}

// 3. Hàm lọc sản phẩm (Kết nối với nút nhấn của Đạt)
function filterProducts(category, btnElement) {
    // Đổi màu nút Tab
    const tabs = document.querySelectorAll('.btn-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    // Lọc dữ liệu
    const filtered = category === 'All' 
        ? products 
        : products.filter(p => p.category === category);

    // Vẽ lại sản phẩm đã lọc
    displayProducts(filtered);
}

// 4. Hàm xử lý giỏ hàng
function setupCartButtons() {
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.onclick = () => {
            const cartBadge = document.getElementById('cart-count');
            cartBadge.innerText = parseInt(cartBadge.innerText) + 1;
            alert('Đã thêm sản phẩm vào giỏ hàng thành công! 🛒');
        };
    });
}

// 5. Khi mở trang web (Tự động chạy lần đầu)
document.addEventListener('DOMContentLoaded', () => {
    const allBtn = document.querySelector('.btn-tab');
    filterProducts('All', allBtn); // Tự động load "Tất cả"
});
function renderGrid(list) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ""; 

    list.forEach((p, index) => {
        const col = document.createElement('div');
        col.className = 'col animate-card'; // Thêm class hiệu ứng ở đây
        
        // Thêm một chút delay để các card hiện ra lần lượt (Stagger effect)
        col.style.animationDelay = `${index * 0.05}s`;

        col.innerHTML = `
            <div class="card h-100 product-card p-2 border-0 shadow-sm rounded-4">
                <div class="position-relative overflow-hidden">
                    <span class="badge bg-danger position-absolute top-0 end-0 m-2">-${Math.floor(Math.random() * 10 + 5)}%</span>
                    <img src="${p.img}" class="card-img-top p-2 img-hover" alt="${p.name}">
                </div>
                <div class="card-body px-0 text-center">
                    <h6 class="card-title fw-bold text-truncate px-2">${p.name}</h6>
                    <p class="text-danger fw-bold mb-1">${p.price}</p>
                    <small class="text-muted text-decoration-line-through">${p.oldPrice}</small>
                    <button class="btn btn-primary btn-sm w-100 mt-3 rounded-pill btn-add-cart" style="background: #004AAD; border:none;">Thêm vào giỏ</button>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}
// 1. Lấy các phần tử cần thiết từ HTML
const productGrid = document.getElementById('product-grid');
const cartBadge = document.querySelector('.badge'); // Số 0 màu đỏ trên icon giỏ hàng
let cartCount = 0; // Biến lưu số lượng giỏ hàng
// 2. Hàm hiển thị sản phẩm ra màn hình
function displayProducts(filter = 'All'){
    productGrid.innerHTML = ''; // Xóa nội dung cũ
    const filteredProducts = filter === 'All' 
        ? products 
        : products.filter(p => p.category === filter);
    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="col">
                <div class="card h-100 product-card shadow-sm border-0">
                    <img src="${product.img}" class="card-img-top p-3" alt="${product.name}">
                    <div class="card-body text-start">
                        <h6 class="card-title fw-bold">${product.name}</h6>
                        <p class="text-danger fw-bold mb-1">${product.price}</p>
                        <p class="text-muted small text-decoration-line-through">${product.oldPrice}</p>
                        <button class="btn btn-primary btn-sm w-100 mt-2" onclick="addToCart()">
                            <i class="fa fa-shopping-cart me-1"></i> Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
}

// 3. Hàm xử lý khi click nút "Thêm vào giỏ"
function addToCart() {
    cartCount++; // Tăng số lượng lên 1
    cartBadge.innerText = cartCount; // Cập nhật số hiển thị trên icon giỏ hàng
    // Hiệu ứng thông báo nhỏ (Tùy chọn)
    alert("Đã thêm sản phẩm vào giỏ hàng!");
}
// 4. Hàm lọc sản phẩm (để các nút 'Tất cả', 'iPhone', 'Laptop' hoạt động)
function filterProducts(category, btn) {
    // Đổi màu nút đang chọn
    document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    displayProducts(category);
}

// 5. Gọi hàm hiển thị lần đầu khi load trang
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});