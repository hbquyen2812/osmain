const orderUrl = "https://pizza365-api.onschoolbootcamp.edu.vn/orders/";
const voucherUrl = "https://pizza365-api.onschoolbootcamp.edu.vn/vouchers";
const drinkUrl = "https://pizza365-api.onschoolbootcamp.edu.vn/drinks";

function onBtnGetAllOrderClick() {
    fetch(orderUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch orders");
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function onBtnCreateOrderClick() {
    const order = {
        orderCode: "ORD0007",
        kichCo: "M",
        duongKinh: "25.00",
        suon: 4,
        salad: "300",
        loaiPizza: "HAWAII",
        idVourcher: 1,
        thanhTien: "200000.00",
        idLoaiNuocUong: 1,
        soLuongNuoc: 3,
        hoTen: "Trần Thị Lan",
        email: "lan@devcamp.edu.vn",
        soDienThoai: "0865241654",
        diaChi: "Hà Nội",
        loiNhan: "Pizza bitt tết, món ăn truyền thống ngày tết"
    };

    fetch(orderUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(order)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to create order");
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function onBtnGetOrderByIdClick() {
    const id = 1;

    fetch(`${orderUrl}${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch order by id " + id);
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function onBtnUpdateOrderByIdClick() {
    const id = 1;

    const order = {
        orderCode: "ORD0001",
        kichCo: "M",
        duongKinh: "25.00",
        suon: 4,
        salad: "300",
        loaiPizza: "HAWAII",
        idVourcher: 1,
        thanhTien: "200000.00",
        idLoaiNuocUong: 1,
        soLuongNuoc: 3,
        hoTen: "Phạm Thanh Bình",
        email: "binhpt001@devcamp.edu.vn",
        soDienThoai: "0865241654",
        diaChi: "Hà Nội",
        loiNhan: "Pizza dễ dây",
        trangThai: "confirmed"
    };

    fetch(`${orderUrl}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(order)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to update order with id " + id);
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function onBtnUpdateOrderByIdMotSoThongTinClick() {
    const id = 1;

    const order = {
        hoTen: "Nguyễn Văn An",
        email: "annv2@devcamp.edu.vn",
        trangThai: "cancel"
    };

    fetch(`${orderUrl}${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(order)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to update order with id " + id);
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function onBtnCheckVoucherIdClick() {
    const voucherId = 1;

    fetch(`${voucherUrl}/${voucherId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Voucher không tìm thấy");
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function onBtnGetDrinkListClick() {
    fetch(drinkUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch drink list");
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}