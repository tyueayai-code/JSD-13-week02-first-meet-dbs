use("cake_mee");

db.vendor.deleteMany({});

const shopPrefixes = ["เค้ก", "เบเกอรี่", "โฮมเมด", "คาเฟ่", "ปัง", "อบอุ่น", "หวานละมุน", "ฟู", "คุกกี้", "สวีท"];
const shopSuffixes = ["ป้าหน้าปากซอย", "สุขุมวิท", "เบเกอรี่เฮ้าส์", "เดอคาเฟ่", "การ์เดน", "คิ้วท์", "สวีทโฮม", "เลิฟเวอร์", "ช็อป", "สตูดิโอ"];
const ownerNames = ["Tichayu", "Mimi", "Kavin", "Pim", "Chanon", "Aom", "Nook", "Boss", "Fern", "Earth"];

const mockVendors = [];
const baseTime = new Date('2026-07-09T13:00:00Z');

for (let i = 1; i <= 1000; i++) {
  const vendorId = `V${String(i).padStart(3, '0')}`;
  const shopName = `${shopPrefixes[Math.floor(Math.random() * shopPrefixes.length)]}${shopSuffixes[Math.floor(Math.random() * shopSuffixes.length)]} ${i}`;
  const ownerName = ownerNames[Math.floor(Math.random() * ownerNames.length)] + "_" + i;
  
  // สุ่มพิกัดรอบๆ ประเทศไทย
  const lat = parseFloat((13.7367 + (Math.random() - 0.5) * 2).toFixed(6));
  const lng = parseFloat((100.5231 + (Math.random() - 0.5) * 2).toFixed(6));
  
  const isFreeTier = Math.random() > 0.3;
  const remainingOrders = isFreeTier ? Math.floor(Math.random() * 10 + 1) : 0;
  
  const createTime = new Date(baseTime.getTime() + i * 5 * 60000);

  mockVendors.push({
    vendor_id: vendorId,
    shop_name: shopName,
    owner_name: ownerName,
    location_lat: lat,
    location_lng: lng,
    is_free_tier: isFreeTier,
    remaining_free_orders: remainingOrders,
    create_at: createTime.toISOString()
  });
}

db.vendor.insertMany(mockVendors);
console.log('Successfully inserted 1000 vendors into database.');

