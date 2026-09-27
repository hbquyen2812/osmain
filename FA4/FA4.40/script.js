const orderUrl = "https://pizza365-api.onschoolbootcamp.edu.vn/orders/";
const voucherUrl = "https://pizza365-api.onschoolbootcamp.edu.vn/vouchers";
const drinkUrl = "https://pizza365-api.onschoolbootcamp.edu.vn/drinks";

async function onBtnGetAllOrderClick() {
    try {
        const response = await fetch(orderUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch orders");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function onBtnCreateOrderClick() {
    try {
        const order = {
            orderCode: "ORD0100",
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

        const response = await fetch(orderUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(order)
        });

        if (!response.ok) {
            throw new Error("Failed to create order");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function onBtnGetOrderByOrderCodeClick() {
    try {
        const orderCode = "ORD0001";

        const response = await fetch(`${orderUrl}${orderCode}`);

        if (!response.ok) {
            throw new Error("Failed to fetch order");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function onBtnUpdateOrderByIdClick() {
    try {
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

        const response = await fetch(`${orderUrl}${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(order)
        });

        if (!response.ok) {
            throw new Error("Failed to update order");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function onBtnUpdateOrderByIdMotSoThongTinClick() {
    try {
        const id = 1;

        const order = {
            hoTen: "Nguyễn Văn An",
            email: "annv2@devcamp.edu.vn",
            trangThai: "cancel"
        };

        const response = await fetch(`${orderUrl}${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(order)
        });

        if (!response.ok) {
            throw new Error("Failed to update order");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function onBtnCheckVoucherIdClick() {
    try {
        const voucherId = 1;

        const response = await fetch(`${voucherUrl}/${voucherId}`);

        if (!response.ok) {
            throw new Error("Voucher không tìm thấy");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function onBtnGetDrinkListClick() {
    try {
        const response = await fetch(drinkUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch drink list");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}