
use("cake_mee");

db.orders.deleteMany({});



const thaiAddresses = [
  "123/45 ถ.สุขุมวิท อ.เมือง จ.ระยอง 21000",
  "88/9 ต.บางพระ อ.เมือง จ.ชลบุรี 20130",
  "55/2 ถ.พุทธมณฑลสาย 4 อ.พุทธมณฑล จ.นครปฐม 73170",
  "99/1 ถ.เพชรเกษม อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110",
  "10/2 ถ.มิตรภาพ อ.บ้านโป่ง จ.ราชบุรี 70110",
  "45/8 ถ.นิมมานเหมินท์ อ.เมือง จ.เชียงใหม่ 50200",
  "333/1 ถ.ศรีจันทร์ อ.เมือง จ.ขอนแก่น 40000",
  "9/9 ถ.ป่าตอง อ.กะทู้ จ.ภูเก็ต 83000",
  "77/5 ถ.เพชรเกษม อ.หาดใหญ่ จ.สงขลา 90110",
  "150/2 ถ.รอบเมือง อ.เมือง จ.อุบลราชธานี 34000"
];

const paperTypes = ["KRAFT_BROWN", "NEON_PINK", "PASTEL_BLUE", "MATTE_BLACK", "FLORAL_VINTAGE"];
const paymentStatuses = ["PAID", "PENDING", "FAILED"];
const deliveryStatuses = ["PENDING_DELIVERY", "SHIPPED", "DELIVERED"];
const deliveryTimes = ["10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00", "16:00 - 18:00"];

const mockOrders = [];
const baseTime = new Date('2026-07-09T14:30:00Z');

for (let i = 1; i <= 1000; i++) {
  const orderId = `ORD2026_${String(i).padStart(3, '0')}`;
  const senderId = `U${String(Math.floor(Math.random() * 500 + 1)).padStart(3, '0')}`;
  const recipientId = `U${String(Math.floor(Math.random() * 500 + 501)).padStart(3, '0')}`;
  const orderDate = new Date(baseTime.getTime() + i * 15 * 60000);
  const deliveryDate = new Date(orderDate.getTime() + 48 * 3600000);
  
  mockOrders.push({
    order_id: orderId,
    sender_user_id: senderId,
    recipient_user_id: recipientId,
    order_date: orderDate.toISOString(),
    total_amount: parseFloat((Math.random() * 500 + 19).toFixed(2)),
    payment_status: paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
    delivery_status: deliveryStatuses[Math.floor(Math.random() * deliveryStatuses.length)],
    delivery_date: deliveryDate.toISOString(),
    delivery_time: deliveryTimes[Math.floor(Math.random() * deliveryTimes.length)],
    delivery_address: thaiAddresses[Math.floor(Math.random() * thaiAddresses.length)],
    package_paper_type: paperTypes[Math.floor(Math.random() * paperTypes.length)]
  });
}

db.orders.insertMany(mockOrders);
console.log('Successfully generated 1000 orders into orders_mock_1000.json');