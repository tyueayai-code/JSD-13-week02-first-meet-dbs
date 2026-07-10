use("cake_mee");

db.media.deleteMany({});

const cakesAdjectives = ["ช็อกโกแลต", "สตรอว์เบอร์รี", "วนิลลา", "ชาไทย", "มัทฉะ", "บลูเบอร์รี", "ส้ม", "กาแฟ", "เรดเวลเวต", "มะพร้าว"];
const cakesTypes = ["หน้านิ่ม", "ลาวา", "ชีสเค้ก", "ชอร์ตเค้ก", "โรล", "คัพเค้ก", "มินิเค้ก", "พุดดิ้งเค้ก", "บราวนี่เค้ก", "เครปเค้ก"];
const funnyItems = ["เทียนวันเกิดแบบเป่าไม่ดับ", "หนังยางแดง", "ไม้จิ้มฟัน", "คลิปหนีบกระดาษ", "ทิชชูเปียก", "ปากกาหมึกหมด", "สติ๊กเกอร์กวนๆ", "ลวดเสียบกระดาษ", "ฝาจีบน้ำอัดลม", "ห่อบับเบิ้ลกันกระแทก"];

const vendors = ["V001", "V002", "V003", "V004", "V005", "V_SYSTEM_JOKER"];
const mockProducts = [];

for (let i = 1; i <= 790; i++) {
  const productId = `P${String(i).padStart(3, '0')}`;
  const vendorId = vendors[Math.floor(Math.random() * vendors.length)];
  
  let productName, price, category, stock;
  
  if (i % 3 === 0 || vendorId === "V_SYSTEM_JOKER") {
    productName = funnyItems[Math.floor(Math.random() * funnyItems.length)] + ` (${i})`;
    price = parseFloat((Math.random() * 40 + 19).toFixed(2));
    category = "FUNNY_GIFT";
    stock = Math.floor(Math.random() * 800 + 200);
  } else {
    const adj = cakesAdjectives[Math.floor(Math.random() * cakesAdjectives.length)];
    const tp = cakesTypes[Math.floor(Math.random() * cakesTypes.length)];
    productName = `เค้ก${adj}${tp} # ${i}`;
    price = parseFloat((Math.random() * 400 + 150).toFixed(2));
    category = "CAKE";
    stock = Math.floor(Math.random() * 30 + 10);
  }
  
  mockProducts.push({
    product_id: productId,
    vendor_id: vendorId,
    product_name: productName,
    price: price,
    category: category,
    stock: stock
  });
}

db.media.insertMany(mockProducts)

console.log('Successfully generated 790 products into products_mock_790.json');


