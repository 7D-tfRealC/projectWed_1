 const iphoneList = [
            { name: "Robot hút bụi lau nhà Xiaomi Vacuum X20 Pro", price: "10.350.000đ", oldPrice: "16.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-xiaomi-x20-pro_2_.png" },
            { name: "Robot hút bụi lau nhà tự động Mova Z50 Ultra", price: "20.990.000đ", oldPrice: "35.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/m/o/mova-z50-ultra.png" },
            { name: "Robot hút bụi lau nhà Roborock S Pro", price: "10.990.000đ", oldPrice: "13.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-roborock-s-pro.jpg" },
            { name: "Robot hút bụi lau nhà Ecovacs Deebot T90 Pro...", price: "17.890.000đ", oldPrice: "20.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2_2.jpg" },
            { name: "Robot hút bụi lau sản Dreame D20 Ultra", price: "9.900.000đ", oldPrice: "17.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2_2.jpg" },
            { name: "Robot hút bụi lau nhà Xiaomi Vacuum X20 Pro", price: "10.350.000đ", oldPrice: "16.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-xiaomi-x20-pro_2_.png" },
            { name: "Robot hút bụi lau nhà tự động Mova Z50 Ultra", price: "20.990.000đ", oldPrice: "35.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/m/o/mova-z50-ultra.png" },
            { name: "Robot hút bụi lau nhà Roborock S Pro", price: "10.990.000đ", oldPrice: "13.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-roborock-s-pro.jpg" },
            { name: "Robot hút bụi lau nhà Ecovacs Deebot T90 Pro...", price: "17.890.000đ", oldPrice: "20.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2_2.jpg" },
            { name: "Robot hút bụi lau sản Dreame D20 Ultra", price: "9.900.000đ", oldPrice: "17.990.000đ", img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2_2.jpg" },


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