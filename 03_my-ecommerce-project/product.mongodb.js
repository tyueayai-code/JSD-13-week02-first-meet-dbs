use("cake_mee");


db.product.deleteMany({});


const mockProducts = [
  {
    "product_id": "P0001",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะลาวา # 1",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 256.53,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0002",
    "vendor_id": "V004",
    "product_name": "เค้กเรดเวลเวตบราวนี่เค้ก # 2",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 300.41,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0003",
    "vendor_id": "V002",
    "product_name": "คลิปหนีบกระดาษเหน็บเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 3 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.36,
    "category": "FUNNY_GIFT",
    "stock": 351
  },
  {
    "product_id": "P0004",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตมินิเค้ก # 4",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 618.27,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0005",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตคัพเค้ก # 5",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 363.96,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0006",
    "vendor_id": "V001",
    "product_name": "คลิปหนีบกระดาษห่อแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 6 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 24.3,
    "category": "FUNNY_GIFT",
    "stock": 540
  },
  {
    "product_id": "P0007",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟโรล # 7",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 594.16,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0008",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 8",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 584.37,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0009",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 9 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.51,
    "category": "FUNNY_GIFT",
    "stock": 887
  },
  {
    "product_id": "P0010",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกผูกเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 10 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.28,
    "category": "FUNNY_GIFT",
    "stock": 782
  },
  {
    "product_id": "P0011",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟบราวนี่เค้ก # 11",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 346.92,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0012",
    "vendor_id": "V001",
    "product_name": "คลิปหนีบกระดาษแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 12 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.25,
    "category": "FUNNY_GIFT",
    "stock": 274
  },
  {
    "product_id": "P0013",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 13",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 621.39,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0014",
    "vendor_id": "V004",
    "product_name": "เค้กมะพร้าวคัพเค้ก # 14",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 210.74,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0015",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆมัดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 15 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.88,
    "category": "FUNNY_GIFT",
    "stock": 515
  },
  {
    "product_id": "P0016",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตหน้านิ่ม # 16",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 269.03,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0017",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกติดคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 17 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.05,
    "category": "FUNNY_GIFT",
    "stock": 257
  },
  {
    "product_id": "P0018",
    "vendor_id": "V005",
    "product_name": "ฝาจีบน้ำอัดลมผูกคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 18 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.16,
    "category": "FUNNY_GIFT",
    "stock": 237
  },
  {
    "product_id": "P0019",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยหน้านิ่ม # 19",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 571.14,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0020",
    "vendor_id": "V004",
    "product_name": "เค้กส้มหน้านิ่ม # 20",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 463.99,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0021",
    "vendor_id": "V003",
    "product_name": "ไม้จิ้มฟันแปะสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 21 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 53.98,
    "category": "FUNNY_GIFT",
    "stock": 914
  },
  {
    "product_id": "P0022",
    "vendor_id": "V005",
    "product_name": "เค้กส้มลาวา # 22",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 509.28,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0023",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีโรล # 23",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 118.52,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0024",
    "vendor_id": "V003",
    "product_name": "ลวดเสียบกระดาษเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 24 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.32,
    "category": "FUNNY_GIFT",
    "stock": 267
  },
  {
    "product_id": "P0025",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 25",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 494.24,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0026",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงติดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 26 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.34,
    "category": "FUNNY_GIFT",
    "stock": 249
  },
  {
    "product_id": "P0027",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดผูกคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 27 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.2,
    "category": "FUNNY_GIFT",
    "stock": 445
  },
  {
    "product_id": "P0028",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 28",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 327.27,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0029",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษโปรยแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 29 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.13,
    "category": "FUNNY_GIFT",
    "stock": 991
  },
  {
    "product_id": "P0030",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมเสียบสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 30 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.76,
    "category": "FUNNY_GIFT",
    "stock": 128
  },
  {
    "product_id": "P0031",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตคัพเค้ก # 31",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 403.2,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0032",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตลาวา # 32",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 528.26,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0033",
    "vendor_id": "V005",
    "product_name": "สติ๊กเกอร์กวนๆแปะคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 33 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 55.56,
    "category": "FUNNY_GIFT",
    "stock": 349
  },
  {
    "product_id": "P0034",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีโรล # 34",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 124.43,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0035",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยบราวนี่เค้ก # 35",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 547.05,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0036",
    "vendor_id": "V002",
    "product_name": "ปากกาหมึกหมดซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 36 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 14.17,
    "category": "FUNNY_GIFT",
    "stock": 424
  },
  {
    "product_id": "P0037",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 37",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 177.88,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0038",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟพุดดิ้งเค้ก # 38",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 334.43,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0039",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดโปรยคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 39 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.39,
    "category": "FUNNY_GIFT",
    "stock": 329
  },
  {
    "product_id": "P0040",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาเครปเค้ก # 40",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 102.52,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0041",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟคัพเค้ก # 41",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 444.51,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0042",
    "vendor_id": "V003",
    "product_name": "ฝาจีบน้ำอัดลมเหน็บสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 42 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.46,
    "category": "FUNNY_GIFT",
    "stock": 321
  },
  {
    "product_id": "P0043",
    "vendor_id": "V004",
    "product_name": "เค้กบลูเบอร์รีชอร์ตเค้ก # 43",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 324.98,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0044",
    "vendor_id": "V004",
    "product_name": "เค้กส้มบราวนี่เค้ก # 44",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 589.15,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0045",
    "vendor_id": "V005",
    "product_name": "ลวดเสียบกระดาษเหน็บเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 45 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 55.16,
    "category": "FUNNY_GIFT",
    "stock": 225
  },
  {
    "product_id": "P0046",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตเครปเค้ก # 46",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 131.45,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0047",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวมินิเค้ก # 47",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 162.51,
    "category": "CAKE",
    "stock": 46
  },
  {
    "product_id": "P0048",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 48 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.03,
    "category": "FUNNY_GIFT",
    "stock": 549
  },
  {
    "product_id": "P0049",
    "vendor_id": "V005",
    "product_name": "เค้กมะพร้าวคัพเค้ก # 49",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 659.73,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0050",
    "vendor_id": "V005",
    "product_name": "เค้กมะพร้าวโรล # 50",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 663.32,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0051",
    "vendor_id": "V001",
    "product_name": "หนังยางแดงผูกคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 51 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.95,
    "category": "FUNNY_GIFT",
    "stock": 588
  },
  {
    "product_id": "P0052",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 52",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 182.66,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0053",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวหน้านิ่ม # 53",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 396.93,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0054",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดมัดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 54 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.76,
    "category": "FUNNY_GIFT",
    "stock": 333
  },
  {
    "product_id": "P0055",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันเสียบคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 55 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.23,
    "category": "FUNNY_GIFT",
    "stock": 526
  },
  {
    "product_id": "P0056",
    "vendor_id": "V003",
    "product_name": "เค้กส้มหน้านิ่ม # 56",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 106.67,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0057",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงเสียบเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 57 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.13,
    "category": "FUNNY_GIFT",
    "stock": 854
  },
  {
    "product_id": "P0058",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยโรล # 58",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 610.61,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0059",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 59",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 160.01,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0060",
    "vendor_id": "V005",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเสียบทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 60 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.51,
    "category": "FUNNY_GIFT",
    "stock": 169
  },
  {
    "product_id": "P0061",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษผูกคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 61 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.44,
    "category": "FUNNY_GIFT",
    "stock": 683
  },
  {
    "product_id": "P0062",
    "vendor_id": "V004",
    "product_name": "เค้กส้มบราวนี่เค้ก # 62",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 189.92,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0063",
    "vendor_id": "V002",
    "product_name": "ทิชชูเปียกวางแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 63 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.98,
    "category": "FUNNY_GIFT",
    "stock": 313
  },
  {
    "product_id": "P0064",
    "vendor_id": "V001",
    "product_name": "เค้กส้มหน้านิ่ม # 64",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 342.62,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0065",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 65",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 530.88,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0066",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดห่อคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 66 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.52,
    "category": "FUNNY_GIFT",
    "stock": 787
  },
  {
    "product_id": "P0067",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆวางเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 67 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.27,
    "category": "FUNNY_GIFT",
    "stock": 470
  },
  {
    "product_id": "P0068",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟชอร์ตเค้ก # 68",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 230.23,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0069",
    "vendor_id": "V004",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 69 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.78,
    "category": "FUNNY_GIFT",
    "stock": 608
  },
  {
    "product_id": "P0070",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะชีสเค้ก # 70",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 531.15,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0071",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 71",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 425.11,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0072",
    "vendor_id": "V004",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเหน็บคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 72 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.78,
    "category": "FUNNY_GIFT",
    "stock": 499
  },
  {
    "product_id": "P0073",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีบราวนี่เค้ก # 73",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 449.36,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0074",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันวางสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 74 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.81,
    "category": "FUNNY_GIFT",
    "stock": 229
  },
  {
    "product_id": "P0075",
    "vendor_id": "V004",
    "product_name": "คลิปหนีบกระดาษมัดคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 75 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.65,
    "category": "FUNNY_GIFT",
    "stock": 188
  },
  {
    "product_id": "P0076",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตลาวา # 76",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 228.47,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0077",
    "vendor_id": "V002",
    "product_name": "เค้กส้มหน้านิ่ม # 77",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 188.65,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0078",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันห่อแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 78 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.59,
    "category": "FUNNY_GIFT",
    "stock": 931
  },
  {
    "product_id": "P0079",
    "vendor_id": "V002",
    "product_name": "เค้กชาไทยชอร์ตเค้ก # 79",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 300.8,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0080",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตโรล # 80",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 494.47,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0081",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 81 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.17,
    "category": "FUNNY_GIFT",
    "stock": 355
  },
  {
    "product_id": "P0082",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยชีสเค้ก # 82",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 567.44,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0083",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเสียบสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 83 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 57.85,
    "category": "FUNNY_GIFT",
    "stock": 668
  },
  {
    "product_id": "P0084",
    "vendor_id": "V003",
    "product_name": "สติ๊กเกอร์กวนๆห่อสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 84 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.96,
    "category": "FUNNY_GIFT",
    "stock": 717
  },
  {
    "product_id": "P0085",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีคัพเค้ก # 85",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 596.41,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0086",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตโรล # 86",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 322.71,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0087",
    "vendor_id": "V005",
    "product_name": "สติ๊กเกอร์กวนๆโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 87 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.94,
    "category": "FUNNY_GIFT",
    "stock": 863
  },
  {
    "product_id": "P0088",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยมินิเค้ก # 88",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 499.92,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0089",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 89",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 266.43,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0090",
    "vendor_id": "V005",
    "product_name": "คลิปหนีบกระดาษผูกแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 90 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.76,
    "category": "FUNNY_GIFT",
    "stock": 131
  },
  {
    "product_id": "P0091",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษวางคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 91 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 19.02,
    "category": "FUNNY_GIFT",
    "stock": 239
  },
  {
    "product_id": "P0092",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดแปะคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 92 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.94,
    "category": "FUNNY_GIFT",
    "stock": 175
  },
  {
    "product_id": "P0093",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงเสียบคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 93 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.37,
    "category": "FUNNY_GIFT",
    "stock": 520
  },
  {
    "product_id": "P0094",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวโรล # 94",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 567.32,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0095",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกแปะคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 95 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 24.06,
    "category": "FUNNY_GIFT",
    "stock": 920
  },
  {
    "product_id": "P0096",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดโปรยทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 96 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.26,
    "category": "FUNNY_GIFT",
    "stock": 958
  },
  {
    "product_id": "P0097",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวลาวา # 97",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 593.85,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0098",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษห่อสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 98 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.02,
    "category": "FUNNY_GIFT",
    "stock": 314
  },
  {
    "product_id": "P0099",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงผูกคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 99 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.34,
    "category": "FUNNY_GIFT",
    "stock": 185
  },
  {
    "product_id": "P0100",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตโรล # 100",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 198.38,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0101",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีหน้านิ่ม # 101",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 566.62,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0102",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 102 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.0,
    "category": "FUNNY_GIFT",
    "stock": 996
  },
  {
    "product_id": "P0103",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะเครปเค้ก # 103",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 562.51,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0104",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาโรล # 104",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 619.21,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0105",
    "vendor_id": "V004",
    "product_name": "ทิชชูเปียกโปรยแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 105 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 30.71,
    "category": "FUNNY_GIFT",
    "stock": 986
  },
  {
    "product_id": "P0106",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาหน้านิ่ม # 106",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 230.42,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0107",
    "vendor_id": "V004",
    "product_name": "เค้กมะพร้าวชอร์ตเค้ก # 107",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 435.48,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0108",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเหน็บเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 108 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 56.3,
    "category": "FUNNY_GIFT",
    "stock": 983
  },
  {
    "product_id": "P0109",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 109",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 653.9,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0110",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงวางแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 110 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.65,
    "category": "FUNNY_GIFT",
    "stock": 759
  },
  {
    "product_id": "P0111",
    "vendor_id": "V005",
    "product_name": "ไม้จิ้มฟันมัดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 111 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.06,
    "category": "FUNNY_GIFT",
    "stock": 583
  },
  {
    "product_id": "P0112",
    "vendor_id": "V005",
    "product_name": "เค้กส้มคัพเค้ก # 112",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 206.82,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0113",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีลาวา # 113",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 226.65,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0114",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดเสียบคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 114 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.0,
    "category": "FUNNY_GIFT",
    "stock": 822
  },
  {
    "product_id": "P0115",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะมินิเค้ก # 115",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 414.3,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0116",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตเครปเค้ก # 116",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 518.16,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0117",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 117 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 54.61,
    "category": "FUNNY_GIFT",
    "stock": 352
  },
  {
    "product_id": "P0118",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกโปรยแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 118 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.21,
    "category": "FUNNY_GIFT",
    "stock": 927
  },
  {
    "product_id": "P0119",
    "vendor_id": "V004",
    "product_name": "เค้กบลูเบอร์รีโรล # 119",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 550.28,
    "category": "CAKE",
    "stock": 47
  },
  {
    "product_id": "P0120",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆวางคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 120 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.94,
    "category": "FUNNY_GIFT",
    "stock": 153
  },
  {
    "product_id": "P0121",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 121",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 544.83,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0122",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวลาวา # 122",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 438.13,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0123",
    "vendor_id": "V005",
    "product_name": "ไม้จิ้มฟันโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 123 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.04,
    "category": "FUNNY_GIFT",
    "stock": 1000
  },
  {
    "product_id": "P0124",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกโปรยคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 124 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.45,
    "category": "FUNNY_GIFT",
    "stock": 719
  },
  {
    "product_id": "P0125",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษเสียบคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 125 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 43.13,
    "category": "FUNNY_GIFT",
    "stock": 280
  },
  {
    "product_id": "P0126",
    "vendor_id": "V002",
    "product_name": "ไม้จิ้มฟันมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 126 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.85,
    "category": "FUNNY_GIFT",
    "stock": 247
  },
  {
    "product_id": "P0127",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตชีสเค้ก # 127",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 576.08,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0128",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 128 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 53.16,
    "category": "FUNNY_GIFT",
    "stock": 620
  },
  {
    "product_id": "P0129",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 129 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.76,
    "category": "FUNNY_GIFT",
    "stock": 581
  },
  {
    "product_id": "P0130",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะคัพเค้ก # 130",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 397.41,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0131",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีมินิเค้ก # 131",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 600.56,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0132",
    "vendor_id": "V004",
    "product_name": "สติ๊กเกอร์กวนๆมัดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 132 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.37,
    "category": "FUNNY_GIFT",
    "stock": 813
  },
  {
    "product_id": "P0133",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีพุดดิ้งเค้ก # 133",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 107.55,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0134",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆเหน็บคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 134 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.14,
    "category": "FUNNY_GIFT",
    "stock": 817
  },
  {
    "product_id": "P0135",
    "vendor_id": "V005",
    "product_name": "ห่อบับเบิ้ลกันกระแทกโปรยเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 135 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.06,
    "category": "FUNNY_GIFT",
    "stock": 781
  },
  {
    "product_id": "P0136",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตชีสเค้ก # 136",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 485.14,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0137",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมผูกแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 137 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.06,
    "category": "FUNNY_GIFT",
    "stock": 764
  },
  {
    "product_id": "P0138",
    "vendor_id": "V002",
    "product_name": "ปากกาหมึกหมดเหน็บเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 138 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.23,
    "category": "FUNNY_GIFT",
    "stock": 173
  },
  {
    "product_id": "P0139",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยหน้านิ่ม # 139",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 429.02,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0140",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวพุดดิ้งเค้ก # 140",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 347.48,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0141",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกห่อคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 141 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.22,
    "category": "FUNNY_GIFT",
    "stock": 814
  },
  {
    "product_id": "P0142",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟลาวา # 142",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 142.29,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0143",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีชอร์ตเค้ก # 143",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 151.98,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0144",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษวางเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 144 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.41,
    "category": "FUNNY_GIFT",
    "stock": 532
  },
  {
    "product_id": "P0145",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมผูกคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 145 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.02,
    "category": "FUNNY_GIFT",
    "stock": 524
  },
  {
    "product_id": "P0146",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีโรล # 146",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 331.01,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0147",
    "vendor_id": "V003",
    "product_name": "สติ๊กเกอร์กวนๆแปะคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 147 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 39.68,
    "category": "FUNNY_GIFT",
    "stock": 223
  },
  {
    "product_id": "P0148",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟมินิเค้ก # 148",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 288.92,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0149",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีโรล # 149",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 288.0,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0150",
    "vendor_id": "V003",
    "product_name": "ทิชชูเปียกติดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 150 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 40.17,
    "category": "FUNNY_GIFT",
    "stock": 958
  },
  {
    "product_id": "P0151",
    "vendor_id": "V002",
    "product_name": "เค้กชาไทยคัพเค้ก # 151",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 512.84,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0152",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะชีสเค้ก # 152",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 372.96,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0153",
    "vendor_id": "V004",
    "product_name": "ฝาจีบน้ำอัดลมโปรยคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 153 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.38,
    "category": "FUNNY_GIFT",
    "stock": 400
  },
  {
    "product_id": "P0154",
    "vendor_id": "V001",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 154",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 634.72,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0155",
    "vendor_id": "V003",
    "product_name": "เค้กส้มเครปเค้ก # 155",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 461.1,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0156",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงห่อสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 156 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.71,
    "category": "FUNNY_GIFT",
    "stock": 554
  },
  {
    "product_id": "P0157",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดเสียบเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 157 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.52,
    "category": "FUNNY_GIFT",
    "stock": 397
  },
  {
    "product_id": "P0158",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตชอร์ตเค้ก # 158",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 345.59,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0159",
    "vendor_id": "V005",
    "product_name": "ลวดเสียบกระดาษติดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 159 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.04,
    "category": "FUNNY_GIFT",
    "stock": 810
  },
  {
    "product_id": "P0160",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษห่อคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 160 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.28,
    "category": "FUNNY_GIFT",
    "stock": 231
  },
  {
    "product_id": "P0161",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะมินิเค้ก # 161",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 193.74,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0162",
    "vendor_id": "V005",
    "product_name": "ทิชชูเปียกซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 162 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 24.54,
    "category": "FUNNY_GIFT",
    "stock": 702
  },
  {
    "product_id": "P0163",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตโรล # 163",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 460.17,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0164",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาคัพเค้ก # 164",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 492.49,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0165",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงแปะทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 165 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.02,
    "category": "FUNNY_GIFT",
    "stock": 320
  },
  {
    "product_id": "P0166",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาพุดดิ้งเค้ก # 166",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 200.68,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0167",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตเครปเค้ก # 167",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 239.09,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0168",
    "vendor_id": "V004",
    "product_name": "คลิปหนีบกระดาษวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 168 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.37,
    "category": "FUNNY_GIFT",
    "stock": 883
  },
  {
    "product_id": "P0169",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวคัพเค้ก # 169",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 335.29,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0170",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟโรล # 170",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 354.24,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0171",
    "vendor_id": "V002",
    "product_name": "การ์ดเปล่าเขียนผิดห่อทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 171 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.21,
    "category": "FUNNY_GIFT",
    "stock": 861
  },
  {
    "product_id": "P0172",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมติดคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 172 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.48,
    "category": "FUNNY_GIFT",
    "stock": 701
  },
  {
    "product_id": "P0173",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 173 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.26,
    "category": "FUNNY_GIFT",
    "stock": 610
  },
  {
    "product_id": "P0174",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันแปะคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 174 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 40.78,
    "category": "FUNNY_GIFT",
    "stock": 817
  },
  {
    "product_id": "P0175",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟมินิเค้ก # 175",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 425.54,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0176",
    "vendor_id": "V005",
    "product_name": "เค้กส้มลาวา # 176",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 247.64,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0177",
    "vendor_id": "V003",
    "product_name": "ทิชชูเปียกห่อเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 177 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.01,
    "category": "FUNNY_GIFT",
    "stock": 294
  },
  {
    "product_id": "P0178",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีมินิเค้ก # 178",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 277.77,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0179",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาพุดดิ้งเค้ก # 179",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 397.31,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0180",
    "vendor_id": "V005",
    "product_name": "ปากกาหมึกหมดแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 180 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.22,
    "category": "FUNNY_GIFT",
    "stock": 244
  },
  {
    "product_id": "P0181",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 181",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 579.09,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0182",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 182",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 684.61,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0183",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกเหน็บคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 183 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.1,
    "category": "FUNNY_GIFT",
    "stock": 639
  },
  {
    "product_id": "P0184",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีหน้านิ่ม # 184",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 520.78,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0185",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟมินิเค้ก # 185",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 204.43,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0186",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 186 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.03,
    "category": "FUNNY_GIFT",
    "stock": 935
  },
  {
    "product_id": "P0187",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 187 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.22,
    "category": "FUNNY_GIFT",
    "stock": 264
  },
  {
    "product_id": "P0188",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวคัพเค้ก # 188",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 414.94,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0189",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 189 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.05,
    "category": "FUNNY_GIFT",
    "stock": 712
  },
  {
    "product_id": "P0190",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาเครปเค้ก # 190",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 361.88,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0191",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 191",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 367.39,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0192",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงเสียบคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 192 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.37,
    "category": "FUNNY_GIFT",
    "stock": 286
  },
  {
    "product_id": "P0193",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลาชีสเค้ก # 193",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 412.64,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0194",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดผูกเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 194 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 33.25,
    "category": "FUNNY_GIFT",
    "stock": 490
  },
  {
    "product_id": "P0195",
    "vendor_id": "V005",
    "product_name": "ลวดเสียบกระดาษเสียบคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 195 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.89,
    "category": "FUNNY_GIFT",
    "stock": 176
  },
  {
    "product_id": "P0196",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟโรล # 196",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 635.95,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0197",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะพุดดิ้งเค้ก # 197",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 538.25,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0198",
    "vendor_id": "V001",
    "product_name": "หนังยางแดงวางคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 198 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.75,
    "category": "FUNNY_GIFT",
    "stock": 538
  },
  {
    "product_id": "P0199",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีบราวนี่เค้ก # 199",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 123.07,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0200",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 200",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 230.27,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0201",
    "vendor_id": "V001",
    "product_name": "ห่อบับเบิ้ลกันกระแทกติดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 201 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 33.53,
    "category": "FUNNY_GIFT",
    "stock": 741
  },
  {
    "product_id": "P0202",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 202",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 572.18,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0203",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกติดเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 203 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.46,
    "category": "FUNNY_GIFT",
    "stock": 297
  },
  {
    "product_id": "P0204",
    "vendor_id": "V001",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 204 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.7,
    "category": "FUNNY_GIFT",
    "stock": 581
  },
  {
    "product_id": "P0205",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาบราวนี่เค้ก # 205",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 288.56,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0206",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีคัพเค้ก # 206",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 236.48,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0207",
    "vendor_id": "V001",
    "product_name": "การ์ดเปล่าเขียนผิดโปรยแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 207 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.91,
    "category": "FUNNY_GIFT",
    "stock": 121
  },
  {
    "product_id": "P0208",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวเครปเค้ก # 208",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 482.04,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0209",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆแปะคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 209 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.13,
    "category": "FUNNY_GIFT",
    "stock": 943
  },
  {
    "product_id": "P0210",
    "vendor_id": "V003",
    "product_name": "ลวดเสียบกระดาษวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 210 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.83,
    "category": "FUNNY_GIFT",
    "stock": 417
  },
  {
    "product_id": "P0211",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวคัพเค้ก # 211",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 644.22,
    "category": "CAKE",
    "stock": 47
  },
  {
    "product_id": "P0212",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดโปรยคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 212 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.96,
    "category": "FUNNY_GIFT",
    "stock": 475
  },
  {
    "product_id": "P0213",
    "vendor_id": "V002",
    "product_name": "ฝาจีบน้ำอัดลมโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 213 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.18,
    "category": "FUNNY_GIFT",
    "stock": 236
  },
  {
    "product_id": "P0214",
    "vendor_id": "V002",
    "product_name": "เค้กส้มหน้านิ่ม # 214",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 312.12,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0215",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกวางคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 215 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.23,
    "category": "FUNNY_GIFT",
    "stock": 766
  },
  {
    "product_id": "P0216",
    "vendor_id": "V002",
    "product_name": "คลิปหนีบกระดาษซ่อนคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 216 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.84,
    "category": "FUNNY_GIFT",
    "stock": 545
  },
  {
    "product_id": "P0217",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวบราวนี่เค้ก # 217",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 322.71,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0218",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีเครปเค้ก # 218",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 457.17,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0219",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษวางแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 219 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.28,
    "category": "FUNNY_GIFT",
    "stock": 449
  },
  {
    "product_id": "P0220",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยมินิเค้ก # 220",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 431.36,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0221",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะมินิเค้ก # 221",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 206.05,
    "category": "CAKE",
    "stock": 46
  },
  {
    "product_id": "P0222",
    "vendor_id": "V004",
    "product_name": "คลิปหนีบกระดาษเหน็บทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 222 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.53,
    "category": "FUNNY_GIFT",
    "stock": 841
  },
  {
    "product_id": "P0223",
    "vendor_id": "V005",
    "product_name": "เค้กมะพร้าวหน้านิ่ม # 223",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 547.51,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0224",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟลาวา # 224",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 393.14,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0225",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงผูกเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 225 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.02,
    "category": "FUNNY_GIFT",
    "stock": 197
  },
  {
    "product_id": "P0226",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีชอร์ตเค้ก # 226",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 242.05,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0227",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 227",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 398.56,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0228",
    "vendor_id": "V003",
    "product_name": "ห่อบับเบิ้ลกันกระแทกห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 228 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.04,
    "category": "FUNNY_GIFT",
    "stock": 609
  },
  {
    "product_id": "P0229",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมซ่อนเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 229 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.66,
    "category": "FUNNY_GIFT",
    "stock": 532
  },
  {
    "product_id": "P0230",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟลาวา # 230",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 537.78,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0231",
    "vendor_id": "V002",
    "product_name": "ฝาจีบน้ำอัดลมซ่อนเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 231 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.32,
    "category": "FUNNY_GIFT",
    "stock": 669
  },
  {
    "product_id": "P0232",
    "vendor_id": "V002",
    "product_name": "เค้กชาไทยชอร์ตเค้ก # 232",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 195.97,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0233",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะลาวา # 233",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 237.88,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0234",
    "vendor_id": "V003",
    "product_name": "สติ๊กเกอร์กวนๆแปะทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 234 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.19,
    "category": "FUNNY_GIFT",
    "stock": 419
  },
  {
    "product_id": "P0235",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีโรล # 235",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 555.31,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0236",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกผูกทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 236 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.02,
    "category": "FUNNY_GIFT",
    "stock": 442
  },
  {
    "product_id": "P0237",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดวางเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 237 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.41,
    "category": "FUNNY_GIFT",
    "stock": 139
  },
  {
    "product_id": "P0238",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตลาวา # 238",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 631.03,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0239",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตบราวนี่เค้ก # 239",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 533.41,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0240",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกเหน็บคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 240 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.33,
    "category": "FUNNY_GIFT",
    "stock": 815
  },
  {
    "product_id": "P0241",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาเครปเค้ก # 241",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 477.85,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0242",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 242",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 610.4,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0243",
    "vendor_id": "V005",
    "product_name": "ไม้จิ้มฟันเสียบสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 243 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.62,
    "category": "FUNNY_GIFT",
    "stock": 920
  },
  {
    "product_id": "P0244",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมเหน็บเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 244 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.19,
    "category": "FUNNY_GIFT",
    "stock": 785
  },
  {
    "product_id": "P0245",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวบราวนี่เค้ก # 245",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 463.6,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0246",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเหน็บคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 246 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.0,
    "category": "FUNNY_GIFT",
    "stock": 990
  },
  {
    "product_id": "P0247",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะชีสเค้ก # 247",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 558.71,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0248",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีลาวา # 248",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 616.33,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0249",
    "vendor_id": "V004",
    "product_name": "ลวดเสียบกระดาษวางสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 249 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.16,
    "category": "FUNNY_GIFT",
    "stock": 649
  },
  {
    "product_id": "P0250",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 250",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 423.46,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0251",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 251 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 43.47,
    "category": "FUNNY_GIFT",
    "stock": 242
  },
  {
    "product_id": "P0252",
    "vendor_id": "V004",
    "product_name": "ลวดเสียบกระดาษห่อคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 252 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.41,
    "category": "FUNNY_GIFT",
    "stock": 224
  },
  {
    "product_id": "P0253",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 253",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 157.59,
    "category": "CAKE",
    "stock": 47
  },
  {
    "product_id": "P0254",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 254",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 647.2,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0255",
    "vendor_id": "V003",
    "product_name": "ไม้จิ้มฟันวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 255 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.74,
    "category": "FUNNY_GIFT",
    "stock": 637
  },
  {
    "product_id": "P0256",
    "vendor_id": "V004",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 256",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 119.62,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0257",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟบราวนี่เค้ก # 257",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 369.09,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0258",
    "vendor_id": "V002",
    "product_name": "คลิปหนีบกระดาษติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 258 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.44,
    "category": "FUNNY_GIFT",
    "stock": 288
  },
  {
    "product_id": "P0259",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีมินิเค้ก # 259",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 584.86,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0260",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมห่อแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 260 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 24.21,
    "category": "FUNNY_GIFT",
    "stock": 732
  },
  {
    "product_id": "P0261",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกโปรยสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 261 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.38,
    "category": "FUNNY_GIFT",
    "stock": 403
  },
  {
    "product_id": "P0262",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะหน้านิ่ม # 262",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 627.7,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0263",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 263",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 272.3,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0264",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดแปะทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 264 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.49,
    "category": "FUNNY_GIFT",
    "stock": 949
  },
  {
    "product_id": "P0265",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 265",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 171.65,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0266",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตบราวนี่เค้ก # 266",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 102.8,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0267",
    "vendor_id": "V002",
    "product_name": "ฝาจีบน้ำอัดลมโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 267 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.08,
    "category": "FUNNY_GIFT",
    "stock": 286
  },
  {
    "product_id": "P0268",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 268 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.21,
    "category": "FUNNY_GIFT",
    "stock": 809
  },
  {
    "product_id": "P0269",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 269",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 325.77,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0270",
    "vendor_id": "V003",
    "product_name": "ห่อบับเบิ้ลกันกระแทกซ่อนแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 270 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.26,
    "category": "FUNNY_GIFT",
    "stock": 277
  },
  {
    "product_id": "P0271",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะชีสเค้ก # 271",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 110.17,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0272",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวพุดดิ้งเค้ก # 272",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 370.8,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0273",
    "vendor_id": "V002",
    "product_name": "ไม้จิ้มฟันวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 273 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 33.12,
    "category": "FUNNY_GIFT",
    "stock": 433
  },
  {
    "product_id": "P0274",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยคัพเค้ก # 274",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 525.78,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0275",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟมินิเค้ก # 275",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 550.96,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0276",
    "vendor_id": "V004",
    "product_name": "ฝาจีบน้ำอัดลมวางทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 276 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 51.88,
    "category": "FUNNY_GIFT",
    "stock": 223
  },
  {
    "product_id": "P0277",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตเครปเค้ก # 277",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 303.39,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0278",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตชอร์ตเค้ก # 278",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 559.34,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0279",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกห่อคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 279 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 30.21,
    "category": "FUNNY_GIFT",
    "stock": 872
  },
  {
    "product_id": "P0280",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษซ่อนเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 280 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.25,
    "category": "FUNNY_GIFT",
    "stock": 672
  },
  {
    "product_id": "P0281",
    "vendor_id": "V003",
    "product_name": "เค้กส้มลาวา # 281",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 291.82,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0282",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดเหน็บเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 282 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.21,
    "category": "FUNNY_GIFT",
    "stock": 578
  },
  {
    "product_id": "P0283",
    "vendor_id": "V004",
    "product_name": "เค้กส้มชีสเค้ก # 283",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 557.79,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0284",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีคัพเค้ก # 284",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 631.62,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0285",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงผูกคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 285 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 39.74,
    "category": "FUNNY_GIFT",
    "stock": 203
  },
  {
    "product_id": "P0286",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะคัพเค้ก # 286",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 542.87,
    "category": "CAKE",
    "stock": 46
  },
  {
    "product_id": "P0287",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 287",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 406.81,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0288",
    "vendor_id": "V001",
    "product_name": "ปากกาหมึกหมดเสียบคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 288 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.07,
    "category": "FUNNY_GIFT",
    "stock": 769
  },
  {
    "product_id": "P0289",
    "vendor_id": "V001",
    "product_name": "เค้กเรดเวลเวตหน้านิ่ม # 289",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 529.92,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0290",
    "vendor_id": "V001",
    "product_name": "เค้กเรดเวลเวตชอร์ตเค้ก # 290",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 413.77,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0291",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 291 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.19,
    "category": "FUNNY_GIFT",
    "stock": 390
  },
  {
    "product_id": "P0292",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 292",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 260.0,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0293",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยชอร์ตเค้ก # 293",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 370.04,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0294",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงห่อคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 294 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 30.36,
    "category": "FUNNY_GIFT",
    "stock": 611
  },
  {
    "product_id": "P0295",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีโรล # 295",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 522.22,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0296",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลาคัพเค้ก # 296",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 309.36,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0297",
    "vendor_id": "V005",
    "product_name": "สติ๊กเกอร์กวนๆซ่อนแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 297 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.68,
    "category": "FUNNY_GIFT",
    "stock": 789
  },
  {
    "product_id": "P0298",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดห่อคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 298 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.47,
    "category": "FUNNY_GIFT",
    "stock": 624
  },
  {
    "product_id": "P0299",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 299 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.99,
    "category": "FUNNY_GIFT",
    "stock": 653
  },
  {
    "product_id": "P0300",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดวางคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 300 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 43.69,
    "category": "FUNNY_GIFT",
    "stock": 882
  },
  {
    "product_id": "P0301",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 301",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 309.17,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0302",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตเครปเค้ก # 302",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 479.97,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0303",
    "vendor_id": "V005",
    "product_name": "คลิปหนีบกระดาษติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 303 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 56.9,
    "category": "FUNNY_GIFT",
    "stock": 605
  },
  {
    "product_id": "P0304",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะโรล # 304",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 172.41,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0305",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาคัพเค้ก # 305",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 139.41,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0306",
    "vendor_id": "V003",
    "product_name": "ไม้จิ้มฟันผูกเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 306 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 57.25,
    "category": "FUNNY_GIFT",
    "stock": 782
  },
  {
    "product_id": "P0307",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษมัดคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 307 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 56.9,
    "category": "FUNNY_GIFT",
    "stock": 278
  },
  {
    "product_id": "P0308",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยหน้านิ่ม # 308",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 408.11,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0309",
    "vendor_id": "V001",
    "product_name": "หนังยางแดงติดคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 309 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.14,
    "category": "FUNNY_GIFT",
    "stock": 351
  },
  {
    "product_id": "P0310",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 310",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 584.25,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0311",
    "vendor_id": "V004",
    "product_name": "เค้กส้มคัพเค้ก # 311",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 289.2,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0312",
    "vendor_id": "V004",
    "product_name": "ทิชชูเปียกติดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 312 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.84,
    "category": "FUNNY_GIFT",
    "stock": 725
  },
  {
    "product_id": "P0313",
    "vendor_id": "V001",
    "product_name": "เค้กเรดเวลเวตลาวา # 313",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 424.66,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0314",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 314",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 620.29,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0315",
    "vendor_id": "V005",
    "product_name": "ลวดเสียบกระดาษโปรยแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 315 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.56,
    "category": "FUNNY_GIFT",
    "stock": 167
  },
  {
    "product_id": "P0316",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษมัดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 316 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.69,
    "category": "FUNNY_GIFT",
    "stock": 293
  },
  {
    "product_id": "P0317",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตลาวา # 317",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 454.13,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0318",
    "vendor_id": "V004",
    "product_name": "ห่อบับเบิ้ลกันกระแทกโปรยคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 318 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.27,
    "category": "FUNNY_GIFT",
    "stock": 194
  },
  {
    "product_id": "P0319",
    "vendor_id": "V002",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 319",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 667.36,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0320",
    "vendor_id": "V005",
    "product_name": "เค้กส้มคัพเค้ก # 320",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 218.87,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0321",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษเหน็บเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 321 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.39,
    "category": "FUNNY_GIFT",
    "stock": 871
  },
  {
    "product_id": "P0322",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 322",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 259.6,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0323",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟเครปเค้ก # 323",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 426.66,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0324",
    "vendor_id": "V002",
    "product_name": "ลวดเสียบกระดาษผูกสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 324 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.87,
    "category": "FUNNY_GIFT",
    "stock": 635
  },
  {
    "product_id": "P0325",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะคัพเค้ก # 325",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 384.97,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0326",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟคัพเค้ก # 326",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 321.93,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0327",
    "vendor_id": "V003",
    "product_name": "ทิชชูเปียกวางเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 327 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 55.38,
    "category": "FUNNY_GIFT",
    "stock": 824
  },
  {
    "product_id": "P0328",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีเครปเค้ก # 328",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 647.82,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0329",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงโปรยคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 329 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.96,
    "category": "FUNNY_GIFT",
    "stock": 440
  },
  {
    "product_id": "P0330",
    "vendor_id": "V001",
    "product_name": "หนังยางแดงโปรยแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 330 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.08,
    "category": "FUNNY_GIFT",
    "stock": 507
  },
  {
    "product_id": "P0331",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาคัพเค้ก # 331",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 627.4,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0332",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 332",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 140.92,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0333",
    "vendor_id": "V005",
    "product_name": "ทิชชูเปียกซ่อนเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 333 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.57,
    "category": "FUNNY_GIFT",
    "stock": 605
  },
  {
    "product_id": "P0334",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยบราวนี่เค้ก # 334",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 271.66,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0335",
    "vendor_id": "V002",
    "product_name": "เค้กส้มโรล # 335",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 587.69,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0336",
    "vendor_id": "V001",
    "product_name": "ไม้จิ้มฟันวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 336 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.73,
    "category": "FUNNY_GIFT",
    "stock": 917
  },
  {
    "product_id": "P0337",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยชีสเค้ก # 337",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 483.93,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0338",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 338",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 270.31,
    "category": "CAKE",
    "stock": 10
  },
  {
    "product_id": "P0339",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 339 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.79,
    "category": "FUNNY_GIFT",
    "stock": 673
  },
  {
    "product_id": "P0340",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีคัพเค้ก # 340",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 299.29,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0341",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 341",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 109.49,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0342",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 342 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 30.63,
    "category": "FUNNY_GIFT",
    "stock": 447
  },
  {
    "product_id": "P0343",
    "vendor_id": "V003",
    "product_name": "เค้กส้มชีสเค้ก # 343",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 199.89,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0344",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยมินิเค้ก # 344",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 411.19,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0345",
    "vendor_id": "V005",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเหน็บคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 345 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.3,
    "category": "FUNNY_GIFT",
    "stock": 869
  },
  {
    "product_id": "P0346",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 346 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.33,
    "category": "FUNNY_GIFT",
    "stock": 483
  },
  {
    "product_id": "P0347",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงห่อคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 347 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.15,
    "category": "FUNNY_GIFT",
    "stock": 758
  },
  {
    "product_id": "P0348",
    "vendor_id": "V001",
    "product_name": "ไม้จิ้มฟันห่อทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 348 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.95,
    "category": "FUNNY_GIFT",
    "stock": 565
  },
  {
    "product_id": "P0349",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีชอร์ตเค้ก # 349",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 623.5,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0350",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวบราวนี่เค้ก # 350",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 200.34,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0351",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 351 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 19.69,
    "category": "FUNNY_GIFT",
    "stock": 289
  },
  {
    "product_id": "P0352",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 352",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 317.59,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0353",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันซ่อนสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 353 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 50.62,
    "category": "FUNNY_GIFT",
    "stock": 475
  },
  {
    "product_id": "P0354",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 354 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.42,
    "category": "FUNNY_GIFT",
    "stock": 755
  },
  {
    "product_id": "P0355",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะเครปเค้ก # 355",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 642.59,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0356",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 356",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 453.07,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0357",
    "vendor_id": "V003",
    "product_name": "ลวดเสียบกระดาษมัดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 357 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.81,
    "category": "FUNNY_GIFT",
    "stock": 562
  },
  {
    "product_id": "P0358",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตคัพเค้ก # 358",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 117.28,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0359",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟหน้านิ่ม # 359",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 539.44,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0360",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกห่อสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 360 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 40.96,
    "category": "FUNNY_GIFT",
    "stock": 502
  },
  {
    "product_id": "P0361",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีเครปเค้ก # 361",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 414.39,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0362",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีเครปเค้ก # 362",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 621.64,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0363",
    "vendor_id": "V005",
    "product_name": "สติ๊กเกอร์กวนๆติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 363 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.55,
    "category": "FUNNY_GIFT",
    "stock": 774
  },
  {
    "product_id": "P0364",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยเครปเค้ก # 364",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 450.44,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0365",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษเหน็บเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 365 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.12,
    "category": "FUNNY_GIFT",
    "stock": 913
  },
  {
    "product_id": "P0366",
    "vendor_id": "V004",
    "product_name": "ปากกาหมึกหมดแปะคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 366 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.79,
    "category": "FUNNY_GIFT",
    "stock": 687
  },
  {
    "product_id": "P0367",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะเครปเค้ก # 367",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 550.21,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0368",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 368",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 680.47,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0369",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษผูกแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 369 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.67,
    "category": "FUNNY_GIFT",
    "stock": 858
  },
  {
    "product_id": "P0370",
    "vendor_id": "V005",
    "product_name": "เค้กส้มลาวา # 370",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 467.37,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0371",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาเครปเค้ก # 371",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 688.23,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0372",
    "vendor_id": "V001",
    "product_name": "สติ๊กเกอร์กวนๆมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 372 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 33.18,
    "category": "FUNNY_GIFT",
    "stock": 432
  },
  {
    "product_id": "P0373",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีเครปเค้ก # 373",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 452.32,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0374",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีลาวา # 374",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 650.95,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0375",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษผูกทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 375 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.93,
    "category": "FUNNY_GIFT",
    "stock": 280
  },
  {
    "product_id": "P0376",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 376",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 260.98,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0377",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีลาวา # 377",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 384.45,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0378",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษมัดเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 378 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.68,
    "category": "FUNNY_GIFT",
    "stock": 601
  },
  {
    "product_id": "P0379",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยพุดดิ้งเค้ก # 379",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 142.52,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0380",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะคัพเค้ก # 380",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 140.71,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0381",
    "vendor_id": "V004",
    "product_name": "ฝาจีบน้ำอัดลมโปรยเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 381 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.63,
    "category": "FUNNY_GIFT",
    "stock": 856
  },
  {
    "product_id": "P0382",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยมินิเค้ก # 382",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 313.73,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0383",
    "vendor_id": "V001",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 383",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 228.76,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0384",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 384 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.3,
    "category": "FUNNY_GIFT",
    "stock": 106
  },
  {
    "product_id": "P0385",
    "vendor_id": "V004",
    "product_name": "เค้กเรดเวลเวตเครปเค้ก # 385",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 269.03,
    "category": "CAKE",
    "stock": 46
  },
  {
    "product_id": "P0386",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 386",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 687.08,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0387",
    "vendor_id": "V001",
    "product_name": "หนังยางแดงมัดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 387 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.14,
    "category": "FUNNY_GIFT",
    "stock": 307
  },
  {
    "product_id": "P0388",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 388",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 642.23,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0389",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 389 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.58,
    "category": "FUNNY_GIFT",
    "stock": 991
  },
  {
    "product_id": "P0390",
    "vendor_id": "V001",
    "product_name": "ไม้จิ้มฟันเหน็บคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 390 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 54.49,
    "category": "FUNNY_GIFT",
    "stock": 177
  },
  {
    "product_id": "P0391",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยหน้านิ่ม # 391",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 298.77,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0392",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงเสียบเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 392 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 19.42,
    "category": "FUNNY_GIFT",
    "stock": 173
  },
  {
    "product_id": "P0393",
    "vendor_id": "V003",
    "product_name": "ฝาจีบน้ำอัดลมแปะเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 393 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.54,
    "category": "FUNNY_GIFT",
    "stock": 717
  },
  {
    "product_id": "P0394",
    "vendor_id": "V003",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 394",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 356.57,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0395",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะลาวา # 395",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 460.23,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0396",
    "vendor_id": "V001",
    "product_name": "คลิปหนีบกระดาษมัดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 396 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.39,
    "category": "FUNNY_GIFT",
    "stock": 896
  },
  {
    "product_id": "P0397",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลามินิเค้ก # 397",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 318.79,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0398",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวชอร์ตเค้ก # 398",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 208.22,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0399",
    "vendor_id": "V004",
    "product_name": "สติ๊กเกอร์กวนๆเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 399 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.18,
    "category": "FUNNY_GIFT",
    "stock": 481
  },
  {
    "product_id": "P0400",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดเสียบคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 400 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.45,
    "category": "FUNNY_GIFT",
    "stock": 621
  },
  {
    "product_id": "P0401",
    "vendor_id": "V002",
    "product_name": "เค้กชาไทยลาวา # 401",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 614.06,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0402",
    "vendor_id": "V005",
    "product_name": "ทิชชูเปียกห่อคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 402 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.69,
    "category": "FUNNY_GIFT",
    "stock": 333
  },
  {
    "product_id": "P0403",
    "vendor_id": "V004",
    "product_name": "เค้กบลูเบอร์รีโรล # 403",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 263.57,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0404",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟเครปเค้ก # 404",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 562.29,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0405",
    "vendor_id": "V005",
    "product_name": "ไม้จิ้มฟันซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 405 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.77,
    "category": "FUNNY_GIFT",
    "stock": 340
  },
  {
    "product_id": "P0406",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวชีสเค้ก # 406",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 234.89,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0407",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟหน้านิ่ม # 407",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 575.03,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0408",
    "vendor_id": "V004",
    "product_name": "สติ๊กเกอร์กวนๆห่อคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 408 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.69,
    "category": "FUNNY_GIFT",
    "stock": 150
  },
  {
    "product_id": "P0409",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆเหน็บทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 409 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.85,
    "category": "FUNNY_GIFT",
    "stock": 100
  },
  {
    "product_id": "P0410",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะโรล # 410",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 227.38,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0411",
    "vendor_id": "V005",
    "product_name": "ปากกาหมึกหมดซ่อนคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 411 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.98,
    "category": "FUNNY_GIFT",
    "stock": 220
  },
  {
    "product_id": "P0412",
    "vendor_id": "V001",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 412",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 675.74,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0413",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 413",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 244.26,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0414",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมซ่อนแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 414 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.36,
    "category": "FUNNY_GIFT",
    "stock": 112
  },
  {
    "product_id": "P0415",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกซ่อนสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 415 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.22,
    "category": "FUNNY_GIFT",
    "stock": 129
  },
  {
    "product_id": "P0416",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟลาวา # 416",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 275.59,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0417",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเหน็บสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 417 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.85,
    "category": "FUNNY_GIFT",
    "stock": 351
  },
  {
    "product_id": "P0418",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 418",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 474.26,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0419",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 419",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 134.93,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0420",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดมัดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 420 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 40.53,
    "category": "FUNNY_GIFT",
    "stock": 756
  },
  {
    "product_id": "P0421",
    "vendor_id": "V002",
    "product_name": "เค้กส้มชีสเค้ก # 421",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 257.96,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0422",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีหน้านิ่ม # 422",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 522.41,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0423",
    "vendor_id": "V001",
    "product_name": "คลิปหนีบกระดาษเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 423 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.47,
    "category": "FUNNY_GIFT",
    "stock": 911
  },
  {
    "product_id": "P0424",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะชีสเค้ก # 424",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 593.93,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0425",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวชีสเค้ก # 425",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 673.04,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0426",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดผูกเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 426 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 50.42,
    "category": "FUNNY_GIFT",
    "stock": 134
  },
  {
    "product_id": "P0427",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 427 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.03,
    "category": "FUNNY_GIFT",
    "stock": 778
  },
  {
    "product_id": "P0428",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตชอร์ตเค้ก # 428",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 636.64,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0429",
    "vendor_id": "V002",
    "product_name": "ไม้จิ้มฟันเสียบคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 429 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.73,
    "category": "FUNNY_GIFT",
    "stock": 938
  },
  {
    "product_id": "P0430",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวโรล # 430",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 475.75,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0431",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 431",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 610.71,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0432",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 432 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.35,
    "category": "FUNNY_GIFT",
    "stock": 747
  },
  {
    "product_id": "P0433",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตคัพเค้ก # 433",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 212.62,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0434",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 434",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 525.86,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0435",
    "vendor_id": "V001",
    "product_name": "ห่อบับเบิ้ลกันกระแทกห่อทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 435 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.07,
    "category": "FUNNY_GIFT",
    "stock": 698
  },
  {
    "product_id": "P0436",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยชอร์ตเค้ก # 436",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 626.31,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0437",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเสียบแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 437 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.71,
    "category": "FUNNY_GIFT",
    "stock": 590
  },
  {
    "product_id": "P0438",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันซ่อนคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 438 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.61,
    "category": "FUNNY_GIFT",
    "stock": 875
  },
  {
    "product_id": "P0439",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะชีสเค้ก # 439",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 624.04,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0440",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยบราวนี่เค้ก # 440",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 156.45,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0441",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆซ่อนสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 441 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.31,
    "category": "FUNNY_GIFT",
    "stock": 917
  },
  {
    "product_id": "P0442",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 442",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 520.42,
    "category": "CAKE",
    "stock": 10
  },
  {
    "product_id": "P0443",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 443",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 441.8,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0444",
    "vendor_id": "V005",
    "product_name": "คลิปหนีบกระดาษผูกเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 444 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.75,
    "category": "FUNNY_GIFT",
    "stock": 455
  },
  {
    "product_id": "P0445",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีเครปเค้ก # 445",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 367.55,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0446",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 446",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 447.96,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0447",
    "vendor_id": "V005",
    "product_name": "ปากกาหมึกหมดโปรยทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 447 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.06,
    "category": "FUNNY_GIFT",
    "stock": 123
  },
  {
    "product_id": "P0448",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟชีสเค้ก # 448",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 183.81,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0449",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 449",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 364.76,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0450",
    "vendor_id": "V001",
    "product_name": "ลวดเสียบกระดาษมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 450 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 56.28,
    "category": "FUNNY_GIFT",
    "stock": 371
  },
  {
    "product_id": "P0451",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยบราวนี่เค้ก # 451",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 187.32,
    "category": "CAKE",
    "stock": 47
  },
  {
    "product_id": "P0452",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมห่อเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 452 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.06,
    "category": "FUNNY_GIFT",
    "stock": 727
  },
  {
    "product_id": "P0453",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษวางคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 453 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.94,
    "category": "FUNNY_GIFT",
    "stock": 787
  },
  {
    "product_id": "P0454",
    "vendor_id": "V002",
    "product_name": "เค้กส้มบราวนี่เค้ก # 454",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 445.93,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0455",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาลาวา # 455",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 225.17,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0456",
    "vendor_id": "V001",
    "product_name": "หนังยางแดงโปรยคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 456 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.63,
    "category": "FUNNY_GIFT",
    "stock": 518
  },
  {
    "product_id": "P0457",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวพุดดิ้งเค้ก # 457",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 562.27,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0458",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 458 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.72,
    "category": "FUNNY_GIFT",
    "stock": 467
  },
  {
    "product_id": "P0459",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 459 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.15,
    "category": "FUNNY_GIFT",
    "stock": 854
  },
  {
    "product_id": "P0460",
    "vendor_id": "V002",
    "product_name": "เค้กส้มหน้านิ่ม # 460",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 285.34,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0461",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟมินิเค้ก # 461",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 549.72,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0462",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดมัดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 462 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.38,
    "category": "FUNNY_GIFT",
    "stock": 615
  },
  {
    "product_id": "P0463",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตชอร์ตเค้ก # 463",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 274.71,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0464",
    "vendor_id": "V002",
    "product_name": "เค้กส้มคัพเค้ก # 464",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 665.73,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0465",
    "vendor_id": "V003",
    "product_name": "ปากกาหมึกหมดเสียบคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 465 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.83,
    "category": "FUNNY_GIFT",
    "stock": 660
  },
  {
    "product_id": "P0466",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 466",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 435.89,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0467",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันผูกเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 467 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.32,
    "category": "FUNNY_GIFT",
    "stock": 185
  },
  {
    "product_id": "P0468",
    "vendor_id": "V005",
    "product_name": "คลิปหนีบกระดาษติดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 468 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.15,
    "category": "FUNNY_GIFT",
    "stock": 454
  },
  {
    "product_id": "P0469",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 469",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 540.64,
    "category": "CAKE",
    "stock": 47
  },
  {
    "product_id": "P0470",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟหน้านิ่ม # 470",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 370.1,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0471",
    "vendor_id": "V004",
    "product_name": "ทิชชูเปียกแปะคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 471 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.67,
    "category": "FUNNY_GIFT",
    "stock": 736
  },
  {
    "product_id": "P0472",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาโรล # 472",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 152.76,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0473",
    "vendor_id": "V003",
    "product_name": "เค้กส้มลาวา # 473",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 548.25,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0474",
    "vendor_id": "V004",
    "product_name": "คลิปหนีบกระดาษห่อคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 474 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 30.72,
    "category": "FUNNY_GIFT",
    "stock": 625
  },
  {
    "product_id": "P0475",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันมัดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 475 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 56.92,
    "category": "FUNNY_GIFT",
    "stock": 989
  },
  {
    "product_id": "P0476",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟมินิเค้ก # 476",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 287.1,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0477",
    "vendor_id": "V003",
    "product_name": "ลวดเสียบกระดาษห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 477 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.46,
    "category": "FUNNY_GIFT",
    "stock": 752
  },
  {
    "product_id": "P0478",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 478",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 666.21,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0479",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตมินิเค้ก # 479",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 311.05,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0480",
    "vendor_id": "V003",
    "product_name": "ลวดเสียบกระดาษติดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 480 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.04,
    "category": "FUNNY_GIFT",
    "stock": 718
  },
  {
    "product_id": "P0481",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาเครปเค้ก # 481",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 172.97,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0482",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 482",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 589.17,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0483",
    "vendor_id": "V005",
    "product_name": "ลวดเสียบกระดาษเสียบเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 483 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.68,
    "category": "FUNNY_GIFT",
    "stock": 342
  },
  {
    "product_id": "P0484",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตเครปเค้ก # 484",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 319.07,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0485",
    "vendor_id": "V005",
    "product_name": "เค้กมะพร้าวมินิเค้ก # 485",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 258.35,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0486",
    "vendor_id": "V005",
    "product_name": "ไม้จิ้มฟันมัดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 486 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.99,
    "category": "FUNNY_GIFT",
    "stock": 607
  },
  {
    "product_id": "P0487",
    "vendor_id": "V001",
    "product_name": "เค้กเรดเวลเวตคัพเค้ก # 487",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 263.83,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0488",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีมินิเค้ก # 488",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 160.24,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0489",
    "vendor_id": "V003",
    "product_name": "ฝาจีบน้ำอัดลมมัดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 489 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.56,
    "category": "FUNNY_GIFT",
    "stock": 606
  },
  {
    "product_id": "P0490",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีหน้านิ่ม # 490",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 529.27,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0491",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษแปะแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 491 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.19,
    "category": "FUNNY_GIFT",
    "stock": 324
  },
  {
    "product_id": "P0492",
    "vendor_id": "V003",
    "product_name": "ไม้จิ้มฟันเสียบสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 492 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.99,
    "category": "FUNNY_GIFT",
    "stock": 507
  },
  {
    "product_id": "P0493",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 493",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 164.77,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0494",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยชีสเค้ก # 494",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 194.6,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0495",
    "vendor_id": "V001",
    "product_name": "ลวดเสียบกระดาษมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 495 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.12,
    "category": "FUNNY_GIFT",
    "stock": 339
  },
  {
    "product_id": "P0496",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะหน้านิ่ม # 496",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 173.63,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0497",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 497 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.58,
    "category": "FUNNY_GIFT",
    "stock": 657
  },
  {
    "product_id": "P0498",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 498 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 37.19,
    "category": "FUNNY_GIFT",
    "stock": 470
  },
  {
    "product_id": "P0499",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวชอร์ตเค้ก # 499",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 344.48,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0500",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 500",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 501.63,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0501",
    "vendor_id": "V005",
    "product_name": "สติ๊กเกอร์กวนๆเสียบสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 501 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.27,
    "category": "FUNNY_GIFT",
    "stock": 120
  },
  {
    "product_id": "P0502",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีโรล # 502",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 520.94,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0503",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษห่อเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 503 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.35,
    "category": "FUNNY_GIFT",
    "stock": 121
  },
  {
    "product_id": "P0504",
    "vendor_id": "V001",
    "product_name": "ฝาจีบน้ำอัดลมแปะคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 504 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.11,
    "category": "FUNNY_GIFT",
    "stock": 569
  },
  {
    "product_id": "P0505",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟพุดดิ้งเค้ก # 505",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 649.22,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0506",
    "vendor_id": "V001",
    "product_name": "เค้กส้มชอร์ตเค้ก # 506",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 152.39,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0507",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษติดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 507 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.9,
    "category": "FUNNY_GIFT",
    "stock": 342
  },
  {
    "product_id": "P0508",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีโรล # 508",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 331.26,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0509",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตลาวา # 509",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 342.96,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0510",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 510 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.04,
    "category": "FUNNY_GIFT",
    "stock": 508
  },
  {
    "product_id": "P0511",
    "vendor_id": "V001",
    "product_name": "เค้กส้มชีสเค้ก # 511",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 622.07,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0512",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีชอร์ตเค้ก # 512",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 525.73,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0513",
    "vendor_id": "V004",
    "product_name": "หนังยางแดงวางทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 513 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.94,
    "category": "FUNNY_GIFT",
    "stock": 763
  },
  {
    "product_id": "P0514",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีพุดดิ้งเค้ก # 514",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 644.61,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0515",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกติดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 515 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.34,
    "category": "FUNNY_GIFT",
    "stock": 531
  },
  {
    "product_id": "P0516",
    "vendor_id": "V004",
    "product_name": "ลวดเสียบกระดาษโปรยเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 516 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.22,
    "category": "FUNNY_GIFT",
    "stock": 715
  },
  {
    "product_id": "P0517",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตชีสเค้ก # 517",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 201.2,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0518",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟลาวา # 518",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 250.66,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0519",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 519 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 43.36,
    "category": "FUNNY_GIFT",
    "stock": 220
  },
  {
    "product_id": "P0520",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกแปะคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 520 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.09,
    "category": "FUNNY_GIFT",
    "stock": 353
  },
  {
    "product_id": "P0521",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะลาวา # 521",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 689.5,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0522",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 522 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.31,
    "category": "FUNNY_GIFT",
    "stock": 281
  },
  {
    "product_id": "P0523",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยชอร์ตเค้ก # 523",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 466.11,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0524",
    "vendor_id": "V005",
    "product_name": "เค้กมะพร้าวพุดดิ้งเค้ก # 524",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 152.06,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0525",
    "vendor_id": "V005",
    "product_name": "ลวดเสียบกระดาษติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 525 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.31,
    "category": "FUNNY_GIFT",
    "stock": 161
  },
  {
    "product_id": "P0526",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 526",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 199.99,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0527",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาชีสเค้ก # 527",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 107.67,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0528",
    "vendor_id": "V004",
    "product_name": "ปากกาหมึกหมดเสียบคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 528 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.58,
    "category": "FUNNY_GIFT",
    "stock": 137
  },
  {
    "product_id": "P0529",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตลาวา # 529",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 543.39,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0530",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 530",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 273.76,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0531",
    "vendor_id": "V001",
    "product_name": "สติ๊กเกอร์กวนๆเสียบเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 531 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.63,
    "category": "FUNNY_GIFT",
    "stock": 841
  },
  {
    "product_id": "P0532",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตคัพเค้ก # 532",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 276.86,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0533",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟลาวา # 533",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 570.51,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0534",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษห่อเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 534 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.62,
    "category": "FUNNY_GIFT",
    "stock": 376
  },
  {
    "product_id": "P0535",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาชีสเค้ก # 535",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 329.14,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0536",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยชอร์ตเค้ก # 536",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 217.48,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0537",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษวางเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 537 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.66,
    "category": "FUNNY_GIFT",
    "stock": 239
  },
  {
    "product_id": "P0538",
    "vendor_id": "V002",
    "product_name": "เค้กส้มลาวา # 538",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 626.48,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0539",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 539 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.34,
    "category": "FUNNY_GIFT",
    "stock": 893
  },
  {
    "product_id": "P0540",
    "vendor_id": "V004",
    "product_name": "ปากกาหมึกหมดมัดเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 540 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.4,
    "category": "FUNNY_GIFT",
    "stock": 146
  },
  {
    "product_id": "P0541",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟชอร์ตเค้ก # 541",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 644.49,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0542",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดติดทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 542 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 57.7,
    "category": "FUNNY_GIFT",
    "stock": 417
  },
  {
    "product_id": "P0543",
    "vendor_id": "V001",
    "product_name": "คลิปหนีบกระดาษโปรยทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 543 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 39.4,
    "category": "FUNNY_GIFT",
    "stock": 559
  },
  {
    "product_id": "P0544",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาคัพเค้ก # 544",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 261.87,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0545",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตโรล # 545",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 141.55,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0546",
    "vendor_id": "V001",
    "product_name": "ปากกาหมึกหมดเหน็บเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 546 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.85,
    "category": "FUNNY_GIFT",
    "stock": 144
  },
  {
    "product_id": "P0547",
    "vendor_id": "V003",
    "product_name": "เค้กส้มชอร์ตเค้ก # 547",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 441.48,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0548",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 548",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 232.57,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0549",
    "vendor_id": "V001",
    "product_name": "ลวดเสียบกระดาษซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 549 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 30.02,
    "category": "FUNNY_GIFT",
    "stock": 218
  },
  {
    "product_id": "P0550",
    "vendor_id": "V001",
    "product_name": "เค้กส้มชีสเค้ก # 550",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 588.42,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0551",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันผูกคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 551 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 14.82,
    "category": "FUNNY_GIFT",
    "stock": 769
  },
  {
    "product_id": "P0552",
    "vendor_id": "V001",
    "product_name": "ลวดเสียบกระดาษเสียบเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 552 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.55,
    "category": "FUNNY_GIFT",
    "stock": 361
  },
  {
    "product_id": "P0553",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 553 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 54.38,
    "category": "FUNNY_GIFT",
    "stock": 102
  },
  {
    "product_id": "P0554",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 554",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 636.83,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0555",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงมัดเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 555 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.04,
    "category": "FUNNY_GIFT",
    "stock": 276
  },
  {
    "product_id": "P0556",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะเครปเค้ก # 556",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 427.42,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0557",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟหน้านิ่ม # 557",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 486.36,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0558",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมผูกแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 558 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.79,
    "category": "FUNNY_GIFT",
    "stock": 833
  },
  {
    "product_id": "P0559",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยเครปเค้ก # 559",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 594.52,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0560",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 560",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 294.46,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0561",
    "vendor_id": "V005",
    "product_name": "ไม้จิ้มฟันวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 561 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.65,
    "category": "FUNNY_GIFT",
    "stock": 446
  },
  {
    "product_id": "P0562",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีพุดดิ้งเค้ก # 562",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 572.34,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0563",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวโรล # 563",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 323.58,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0564",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันวางคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 564 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.91,
    "category": "FUNNY_GIFT",
    "stock": 447
  },
  {
    "product_id": "P0565",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษแปะเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 565 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.88,
    "category": "FUNNY_GIFT",
    "stock": 772
  },
  {
    "product_id": "P0566",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีโรล # 566",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 586.05,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0567",
    "vendor_id": "V004",
    "product_name": "ห่อบับเบิ้ลกันกระแทกห่อคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 567 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.43,
    "category": "FUNNY_GIFT",
    "stock": 934
  },
  {
    "product_id": "P0568",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวบราวนี่เค้ก # 568",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 370.29,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0569",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 569",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 352.37,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0570",
    "vendor_id": "V001",
    "product_name": "ปากกาหมึกหมดแปะทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 570 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.37,
    "category": "FUNNY_GIFT",
    "stock": 137
  },
  {
    "product_id": "P0571",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีชอร์ตเค้ก # 571",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 597.79,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0572",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 572",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 433.68,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0573",
    "vendor_id": "V002",
    "product_name": "สติ๊กเกอร์กวนๆโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 573 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.53,
    "category": "FUNNY_GIFT",
    "stock": 667
  },
  {
    "product_id": "P0574",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกเหน็บเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 574 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.42,
    "category": "FUNNY_GIFT",
    "stock": 686
  },
  {
    "product_id": "P0575",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 575",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 551.91,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0576",
    "vendor_id": "V004",
    "product_name": "ทิชชูเปียกห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 576 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.21,
    "category": "FUNNY_GIFT",
    "stock": 175
  },
  {
    "product_id": "P0577",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตเครปเค้ก # 577",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 217.86,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0578",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 578",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 135.23,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0579",
    "vendor_id": "V005",
    "product_name": "หนังยางแดงโปรยคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 579 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 40.91,
    "category": "FUNNY_GIFT",
    "stock": 204
  },
  {
    "product_id": "P0580",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตพุดดิ้งเค้ก # 580",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 681.96,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0581",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยลาวา # 581",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 651.92,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0582",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดวางเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 582 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.39,
    "category": "FUNNY_GIFT",
    "stock": 313
  },
  {
    "product_id": "P0583",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีลาวา # 583",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 416.9,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0584",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟมินิเค้ก # 584",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 550.39,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0585",
    "vendor_id": "V005",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 585 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.65,
    "category": "FUNNY_GIFT",
    "stock": 548
  },
  {
    "product_id": "P0586",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกมัดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 586 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.75,
    "category": "FUNNY_GIFT",
    "stock": 553
  },
  {
    "product_id": "P0587",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 587 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.52,
    "category": "FUNNY_GIFT",
    "stock": 649
  },
  {
    "product_id": "P0588",
    "vendor_id": "V002",
    "product_name": "คลิปหนีบกระดาษผูกคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 588 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.34,
    "category": "FUNNY_GIFT",
    "stock": 118
  },
  {
    "product_id": "P0589",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีโรล # 589",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 461.34,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0590",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟพุดดิ้งเค้ก # 590",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 477.72,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0591",
    "vendor_id": "V005",
    "product_name": "ห่อบับเบิ้ลกันกระแทกมัดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 591 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.1,
    "category": "FUNNY_GIFT",
    "stock": 467
  },
  {
    "product_id": "P0592",
    "vendor_id": "V004",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 592",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 627.05,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0593",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาพุดดิ้งเค้ก # 593",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 200.31,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0594",
    "vendor_id": "V002",
    "product_name": "ทิชชูเปียกซ่อนคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 594 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.58,
    "category": "FUNNY_GIFT",
    "stock": 415
  },
  {
    "product_id": "P0595",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 595",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 687.88,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0596",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาหน้านิ่ม # 596",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 363.42,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0597",
    "vendor_id": "V003",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเหน็บคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 597 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.38,
    "category": "FUNNY_GIFT",
    "stock": 888
  },
  {
    "product_id": "P0598",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลาชีสเค้ก # 598",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 539.31,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0599",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตคัพเค้ก # 599",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 113.18,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0600",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดซ่อนเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 600 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.96,
    "category": "FUNNY_GIFT",
    "stock": 369
  },
  {
    "product_id": "P0601",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะชีสเค้ก # 601",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 184.45,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0602",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีลาวา # 602",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 631.77,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0603",
    "vendor_id": "V002",
    "product_name": "ฝาจีบน้ำอัดลมห่อเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 603 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.58,
    "category": "FUNNY_GIFT",
    "stock": 472
  },
  {
    "product_id": "P0604",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 604",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 572.55,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0605",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีหน้านิ่ม # 605",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 596.15,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0606",
    "vendor_id": "V004",
    "product_name": "ฝาจีบน้ำอัดลมซ่อนเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 606 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.48,
    "category": "FUNNY_GIFT",
    "stock": 203
  },
  {
    "product_id": "P0607",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 607 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.05,
    "category": "FUNNY_GIFT",
    "stock": 619
  },
  {
    "product_id": "P0608",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตมินิเค้ก # 608",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 519.23,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0609",
    "vendor_id": "V005",
    "product_name": "ปากกาหมึกหมดติดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 609 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.15,
    "category": "FUNNY_GIFT",
    "stock": 800
  },
  {
    "product_id": "P0610",
    "vendor_id": "V004",
    "product_name": "เค้กส้มลาวา # 610",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 287.06,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0611",
    "vendor_id": "V005",
    "product_name": "เค้กมะพร้าวพุดดิ้งเค้ก # 611",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 677.24,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0612",
    "vendor_id": "V001",
    "product_name": "ห่อบับเบิ้ลกันกระแทกติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 612 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.21,
    "category": "FUNNY_GIFT",
    "stock": 855
  },
  {
    "product_id": "P0613",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 613",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 144.4,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0614",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีหน้านิ่ม # 614",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 203.73,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0615",
    "vendor_id": "V004",
    "product_name": "ไม้จิ้มฟันซ่อนคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 615 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.45,
    "category": "FUNNY_GIFT",
    "stock": 800
  },
  {
    "product_id": "P0616",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยบราวนี่เค้ก # 616",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 335.86,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0617",
    "vendor_id": "V001",
    "product_name": "เค้กเรดเวลเวตบราวนี่เค้ก # 617",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 162.27,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0618",
    "vendor_id": "V002",
    "product_name": "การ์ดเปล่าเขียนผิดผูกคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 618 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 33.38,
    "category": "FUNNY_GIFT",
    "stock": 827
  },
  {
    "product_id": "P0619",
    "vendor_id": "V004",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 619",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 644.56,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0620",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 620",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 240.15,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0621",
    "vendor_id": "V003",
    "product_name": "ฝาจีบน้ำอัดลมผูกคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 621 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.45,
    "category": "FUNNY_GIFT",
    "stock": 769
  },
  {
    "product_id": "P0622",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตคัพเค้ก # 622",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 643.07,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0623",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะมินิเค้ก # 623",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 575.11,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0624",
    "vendor_id": "V004",
    "product_name": "หนังยางแดงวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 624 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 51.24,
    "category": "FUNNY_GIFT",
    "stock": 993
  },
  {
    "product_id": "P0625",
    "vendor_id": "V001",
    "product_name": "เค้กส้มเครปเค้ก # 625",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 586.61,
    "category": "CAKE",
    "stock": 46
  },
  {
    "product_id": "P0626",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตมินิเค้ก # 626",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 595.7,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0627",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 627 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 37.1,
    "category": "FUNNY_GIFT",
    "stock": 232
  },
  {
    "product_id": "P0628",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีชอร์ตเค้ก # 628",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 115.6,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0629",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาโรล # 629",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 162.03,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0630",
    "vendor_id": "V004",
    "product_name": "ทิชชูเปียกแปะคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 630 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.69,
    "category": "FUNNY_GIFT",
    "stock": 676
  },
  {
    "product_id": "P0631",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวลาวา # 631",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 104.26,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0632",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะมินิเค้ก # 632",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 144.14,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0633",
    "vendor_id": "V001",
    "product_name": "ไม้จิ้มฟันวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 633 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 39.59,
    "category": "FUNNY_GIFT",
    "stock": 602
  },
  {
    "product_id": "P0634",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 634 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.72,
    "category": "FUNNY_GIFT",
    "stock": 361
  },
  {
    "product_id": "P0635",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาชีสเค้ก # 635",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 120.0,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0636",
    "vendor_id": "V001",
    "product_name": "ไม้จิ้มฟันแปะเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 636 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 55.55,
    "category": "FUNNY_GIFT",
    "stock": 954
  },
  {
    "product_id": "P0637",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 637",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 588.47,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0638",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีหน้านิ่ม # 638",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 423.22,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0639",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดผูกคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 639 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.45,
    "category": "FUNNY_GIFT",
    "stock": 709
  },
  {
    "product_id": "P0640",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟชีสเค้ก # 640",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 579.81,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0641",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟพุดดิ้งเค้ก # 641",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 616.43,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0642",
    "vendor_id": "V002",
    "product_name": "คลิปหนีบกระดาษมัดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 642 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.81,
    "category": "FUNNY_GIFT",
    "stock": 786
  },
  {
    "product_id": "P0643",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยมินิเค้ก # 643",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 603.1,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0644",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟมินิเค้ก # 644",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 510.7,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0645",
    "vendor_id": "V002",
    "product_name": "ทิชชูเปียกเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 645 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.32,
    "category": "FUNNY_GIFT",
    "stock": 461
  },
  {
    "product_id": "P0646",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตมินิเค้ก # 646",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 654.68,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0647",
    "vendor_id": "V004",
    "product_name": "เค้กส้มบราวนี่เค้ก # 647",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 667.92,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0648",
    "vendor_id": "V005",
    "product_name": "ห่อบับเบิ้ลกันกระแทกติดเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 648 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 14.81,
    "category": "FUNNY_GIFT",
    "stock": 586
  },
  {
    "product_id": "P0649",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีหน้านิ่ม # 649",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 606.67,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0650",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยชีสเค้ก # 650",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 108.26,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0651",
    "vendor_id": "V003",
    "product_name": "ไม้จิ้มฟันติดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 651 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.97,
    "category": "FUNNY_GIFT",
    "stock": 538
  },
  {
    "product_id": "P0652",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดติดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 652 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.05,
    "category": "FUNNY_GIFT",
    "stock": 181
  },
  {
    "product_id": "P0653",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 653",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 540.22,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0654",
    "vendor_id": "V005",
    "product_name": "หนังยางแดงวางเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 654 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.76,
    "category": "FUNNY_GIFT",
    "stock": 351
  },
  {
    "product_id": "P0655",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีลาวา # 655",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 280.61,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0656",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษมัดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 656 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.14,
    "category": "FUNNY_GIFT",
    "stock": 367
  },
  {
    "product_id": "P0657",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดแปะทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 657 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.29,
    "category": "FUNNY_GIFT",
    "stock": 305
  },
  {
    "product_id": "P0658",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 658",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 383.57,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0659",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 659",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 366.39,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0660",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษผูกคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 660 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.76,
    "category": "FUNNY_GIFT",
    "stock": 472
  },
  {
    "product_id": "P0661",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตชอร์ตเค้ก # 661",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 175.06,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0662",
    "vendor_id": "V002",
    "product_name": "เค้กชาไทยพุดดิ้งเค้ก # 662",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 419.42,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0663",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดห่อสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 663 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 53.69,
    "category": "FUNNY_GIFT",
    "stock": 200
  },
  {
    "product_id": "P0664",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 664",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 514.61,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0665",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะมินิเค้ก # 665",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 558.85,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0666",
    "vendor_id": "V004",
    "product_name": "ทิชชูเปียกห่อคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 666 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.61,
    "category": "FUNNY_GIFT",
    "stock": 859
  },
  {
    "product_id": "P0667",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวคัพเค้ก # 667",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 378.16,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0668",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาเครปเค้ก # 668",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 146.21,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0669",
    "vendor_id": "V001",
    "product_name": "การ์ดเปล่าเขียนผิดแปะทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 669 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.32,
    "category": "FUNNY_GIFT",
    "stock": 207
  },
  {
    "product_id": "P0670",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟหน้านิ่ม # 670",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 513.42,
    "category": "CAKE",
    "stock": 10
  },
  {
    "product_id": "P0671",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 671",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 476.93,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0672",
    "vendor_id": "V004",
    "product_name": "ไม้จิ้มฟันมัดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 672 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.04,
    "category": "FUNNY_GIFT",
    "stock": 556
  },
  {
    "product_id": "P0673",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะเครปเค้ก # 673",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 291.7,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0674",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 674",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 492.7,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0675",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมแปะแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 675 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 43.48,
    "category": "FUNNY_GIFT",
    "stock": 870
  },
  {
    "product_id": "P0676",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตโรล # 676",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 131.34,
    "category": "CAKE",
    "stock": 10
  },
  {
    "product_id": "P0677",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีบราวนี่เค้ก # 677",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 169.41,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0678",
    "vendor_id": "V002",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 678 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 39.36,
    "category": "FUNNY_GIFT",
    "stock": 638
  },
  {
    "product_id": "P0679",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 679 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.75,
    "category": "FUNNY_GIFT",
    "stock": 678
  },
  {
    "product_id": "P0680",
    "vendor_id": "V005",
    "product_name": "เค้กส้มหน้านิ่ม # 680",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 420.67,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0681",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดซ่อนเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 681 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.84,
    "category": "FUNNY_GIFT",
    "stock": 984
  },
  {
    "product_id": "P0682",
    "vendor_id": "V004",
    "product_name": "เค้กมะพร้าวหน้านิ่ม # 682",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 594.64,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0683",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตลาวา # 683",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 514.61,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0684",
    "vendor_id": "V005",
    "product_name": "ลวดเสียบกระดาษวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 684 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.22,
    "category": "FUNNY_GIFT",
    "stock": 336
  },
  {
    "product_id": "P0685",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 685",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 570.94,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0686",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟโรล # 686",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 328.48,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0687",
    "vendor_id": "V005",
    "product_name": "สติ๊กเกอร์กวนๆเสียบเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 687 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.4,
    "category": "FUNNY_GIFT",
    "stock": 733
  },
  {
    "product_id": "P0688",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 688",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 270.45,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0689",
    "vendor_id": "V005",
    "product_name": "เค้กมะพร้าวหน้านิ่ม # 689",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 549.16,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0690",
    "vendor_id": "V002",
    "product_name": "การ์ดเปล่าเขียนผิดมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 690 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.57,
    "category": "FUNNY_GIFT",
    "stock": 905
  },
  {
    "product_id": "P0691",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 691",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 258.82,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0692",
    "vendor_id": "V004",
    "product_name": "เค้กวนิลลาคัพเค้ก # 692",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 626.88,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0693",
    "vendor_id": "V002",
    "product_name": "ฝาจีบน้ำอัดลมห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 693 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.17,
    "category": "FUNNY_GIFT",
    "stock": 518
  },
  {
    "product_id": "P0694",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะชีสเค้ก # 694",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 104.73,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0695",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาคัพเค้ก # 695",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 222.14,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0696",
    "vendor_id": "V001",
    "product_name": "ลวดเสียบกระดาษเสียบเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 696 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.05,
    "category": "FUNNY_GIFT",
    "stock": 266
  },
  {
    "product_id": "P0697",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 697",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 325.18,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0698",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีชอร์ตเค้ก # 698",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 672.15,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0699",
    "vendor_id": "V001",
    "product_name": "ปากกาหมึกหมดวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 699 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.44,
    "category": "FUNNY_GIFT",
    "stock": 425
  },
  {
    "product_id": "P0700",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 700",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 601.02,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0701",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 701",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 176.21,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0702",
    "vendor_id": "V005",
    "product_name": "ปากกาหมึกหมดวางเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 702 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 37.37,
    "category": "FUNNY_GIFT",
    "stock": 861
  },
  {
    "product_id": "P0703",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตโรล # 703",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 600.28,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0704",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลามินิเค้ก # 704",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 157.71,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0705",
    "vendor_id": "V002",
    "product_name": "สติ๊กเกอร์กวนๆมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 705 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.22,
    "category": "FUNNY_GIFT",
    "stock": 179
  },
  {
    "product_id": "P0706",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีโรล # 706",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 321.29,
    "category": "CAKE",
    "stock": 30
  },
  {
    "product_id": "P0707",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 707",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 580.93,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0708",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกโปรยเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 708 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 54.14,
    "category": "FUNNY_GIFT",
    "stock": 581
  },
  {
    "product_id": "P0709",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟโรล # 709",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 496.76,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0710",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาลาวา # 710",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 537.93,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0711",
    "vendor_id": "V003",
    "product_name": "ฝาจีบน้ำอัดลมเหน็บคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 711 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.33,
    "category": "FUNNY_GIFT",
    "stock": 901
  },
  {
    "product_id": "P0712",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตมินิเค้ก # 712",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 252.27,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0713",
    "vendor_id": "V001",
    "product_name": "เค้กชาไทยเครปเค้ก # 713",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 647.89,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0714",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษแปะคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 714 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.11,
    "category": "FUNNY_GIFT",
    "stock": 360
  },
  {
    "product_id": "P0715",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยเครปเค้ก # 715",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 301.49,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0716",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตมินิเค้ก # 716",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 304.39,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0717",
    "vendor_id": "V002",
    "product_name": "ทิชชูเปียกเสียบทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 717 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.36,
    "category": "FUNNY_GIFT",
    "stock": 749
  },
  {
    "product_id": "P0718",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตชีสเค้ก # 718",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 238.45,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0719",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟโรล # 719",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 479.17,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0720",
    "vendor_id": "V004",
    "product_name": "ลวดเสียบกระดาษซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 720 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.69,
    "category": "FUNNY_GIFT",
    "stock": 177
  },
  {
    "product_id": "P0721",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟลาวา # 721",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 684.71,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0722",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีโรล # 722",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 557.39,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0723",
    "vendor_id": "V004",
    "product_name": "ไม้จิ้มฟันห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 723 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.92,
    "category": "FUNNY_GIFT",
    "stock": 736
  },
  {
    "product_id": "P0724",
    "vendor_id": "V003",
    "product_name": "เค้กส้มพุดดิ้งเค้ก # 724",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 285.15,
    "category": "CAKE",
    "stock": 47
  },
  {
    "product_id": "P0725",
    "vendor_id": "V004",
    "product_name": "เค้กบลูเบอร์รีคัพเค้ก # 725",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 643.72,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0726",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 726 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.49,
    "category": "FUNNY_GIFT",
    "stock": 938
  },
  {
    "product_id": "P0727",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะมินิเค้ก # 727",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 593.38,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0728",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีหน้านิ่ม # 728",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 279.64,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0729",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดห่อคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 729 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.66,
    "category": "FUNNY_GIFT",
    "stock": 210
  },
  {
    "product_id": "P0730",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาบราวนี่เค้ก # 730",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 631.76,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0731",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดมัดสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 731 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.55,
    "category": "FUNNY_GIFT",
    "stock": 333
  },
  {
    "product_id": "P0732",
    "vendor_id": "V002",
    "product_name": "ไม้จิ้มฟันเสียบเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 732 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 55.43,
    "category": "FUNNY_GIFT",
    "stock": 262
  },
  {
    "product_id": "P0733",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 733",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 246.06,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0734",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตลาวา # 734",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 137.8,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0735",
    "vendor_id": "V003",
    "product_name": "ปากกาหมึกหมดวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 735 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.35,
    "category": "FUNNY_GIFT",
    "stock": 450
  },
  {
    "product_id": "P0736",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาคัพเค้ก # 736",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 497.46,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0737",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยชอร์ตเค้ก # 737",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 551.55,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0738",
    "vendor_id": "V002",
    "product_name": "สติ๊กเกอร์กวนๆแปะคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 738 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.97,
    "category": "FUNNY_GIFT",
    "stock": 870
  },
  {
    "product_id": "P0739",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟหน้านิ่ม # 739",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 246.89,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0740",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีมินิเค้ก # 740",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 567.01,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0741",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆห่อเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 741 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.24,
    "category": "FUNNY_GIFT",
    "stock": 258
  },
  {
    "product_id": "P0742",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะชีสเค้ก # 742",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 467.46,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0743",
    "vendor_id": "V003",
    "product_name": "เค้กส้มคัพเค้ก # 743",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 266.98,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0744",
    "vendor_id": "V003",
    "product_name": "ลวดเสียบกระดาษห่อแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 744 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.43,
    "category": "FUNNY_GIFT",
    "stock": 392
  },
  {
    "product_id": "P0745",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตเครปเค้ก # 745",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 588.07,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0746",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 746",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 103.42,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0747",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงโปรยคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 747 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.67,
    "category": "FUNNY_GIFT",
    "stock": 422
  },
  {
    "product_id": "P0748",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีเครปเค้ก # 748",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 525.8,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0749",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีลาวา # 749",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 480.3,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0750",
    "vendor_id": "V005",
    "product_name": "ทิชชูเปียกแปะเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 750 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 12.65,
    "category": "FUNNY_GIFT",
    "stock": 601
  },
  {
    "product_id": "P0751",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยคัพเค้ก # 751",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 310.95,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0752",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆโปรยคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 752 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.54,
    "category": "FUNNY_GIFT",
    "stock": 359
  },
  {
    "product_id": "P0753",
    "vendor_id": "V004",
    "product_name": "ฝาจีบน้ำอัดลมวางคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 753 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.54,
    "category": "FUNNY_GIFT",
    "stock": 696
  },
  {
    "product_id": "P0754",
    "vendor_id": "V001",
    "product_name": "เค้กส้มโรล # 754",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 448.89,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0755",
    "vendor_id": "V001",
    "product_name": "เค้กส้มโรล # 755",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 453.12,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0756",
    "vendor_id": "V002",
    "product_name": "ฝาจีบน้ำอัดลมติดคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 756 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 51.9,
    "category": "FUNNY_GIFT",
    "stock": 603
  },
  {
    "product_id": "P0757",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวชอร์ตเค้ก # 757",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 307.72,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0758",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟโรล # 758",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 530.51,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0759",
    "vendor_id": "V004",
    "product_name": "ฝาจีบน้ำอัดลมผูกคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 759 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.16,
    "category": "FUNNY_GIFT",
    "stock": 391
  },
  {
    "product_id": "P0760",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยคัพเค้ก # 760",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 514.23,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0761",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวเครปเค้ก # 761",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 312.98,
    "category": "CAKE",
    "stock": 38
  },
  {
    "product_id": "P0762",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดวางสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 762 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.2,
    "category": "FUNNY_GIFT",
    "stock": 952
  },
  {
    "product_id": "P0763",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะเครปเค้ก # 763",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 261.63,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0764",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวชอร์ตเค้ก # 764",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 404.16,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0765",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกมัดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 765 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 50.7,
    "category": "FUNNY_GIFT",
    "stock": 644
  },
  {
    "product_id": "P0766",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาเครปเค้ก # 766",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 218.03,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0767",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษซ่อนคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 767 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.6,
    "category": "FUNNY_GIFT",
    "stock": 495
  },
  {
    "product_id": "P0768",
    "vendor_id": "V005",
    "product_name": "ฝาจีบน้ำอัดลมแปะเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 768 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.24,
    "category": "FUNNY_GIFT",
    "stock": 879
  },
  {
    "product_id": "P0769",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยชีสเค้ก # 769",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 367.73,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0770",
    "vendor_id": "V004",
    "product_name": "เค้กมะพร้าวบราวนี่เค้ก # 770",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 548.34,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0771",
    "vendor_id": "V003",
    "product_name": "ไม้จิ้มฟันเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 771 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.81,
    "category": "FUNNY_GIFT",
    "stock": 939
  },
  {
    "product_id": "P0772",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตคัพเค้ก # 772",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 154.31,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0773",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีเครปเค้ก # 773",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 125.61,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0774",
    "vendor_id": "V001",
    "product_name": "ฝาจีบน้ำอัดลมเสียบสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 774 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 50.56,
    "category": "FUNNY_GIFT",
    "stock": 221
  },
  {
    "product_id": "P0775",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีคัพเค้ก # 775",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 441.53,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0776",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยบราวนี่เค้ก # 776",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 260.25,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0777",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษแปะสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 777 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 51.39,
    "category": "FUNNY_GIFT",
    "stock": 865
  },
  {
    "product_id": "P0778",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟลาวา # 778",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 205.3,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0779",
    "vendor_id": "V004",
    "product_name": "เค้กส้มโรล # 779",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 516.26,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0780",
    "vendor_id": "V004",
    "product_name": "ห่อบับเบิ้ลกันกระแทกโปรยคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 780 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 57.15,
    "category": "FUNNY_GIFT",
    "stock": 847
  },
  {
    "product_id": "P0781",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 781",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 476.87,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0782",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตชอร์ตเค้ก # 782",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 200.18,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0783",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกซ่อนคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 783 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.88,
    "category": "FUNNY_GIFT",
    "stock": 805
  },
  {
    "product_id": "P0784",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตบราวนี่เค้ก # 784",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 565.37,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0785",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีเครปเค้ก # 785",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 155.77,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0786",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 786 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 36.45,
    "category": "FUNNY_GIFT",
    "stock": 933
  },
  {
    "product_id": "P0787",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวชีสเค้ก # 787",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 401.59,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0788",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตหน้านิ่ม # 788",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 162.73,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0789",
    "vendor_id": "V004",
    "product_name": "ลวดเสียบกระดาษเหน็บเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 789 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.57,
    "category": "FUNNY_GIFT",
    "stock": 715
  },
  {
    "product_id": "P0790",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะหน้านิ่ม # 790",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 473.08,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0791",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวบราวนี่เค้ก # 791",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 113.17,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0792",
    "vendor_id": "V002",
    "product_name": "การ์ดเปล่าเขียนผิดโปรยคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 792 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 54.22,
    "category": "FUNNY_GIFT",
    "stock": 984
  },
  {
    "product_id": "P0793",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 793 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.43,
    "category": "FUNNY_GIFT",
    "stock": 790
  },
  {
    "product_id": "P0794",
    "vendor_id": "V003",
    "product_name": "เค้กเรดเวลเวตลาวา # 794",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 651.47,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0795",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมมัดคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 795 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 53.44,
    "category": "FUNNY_GIFT",
    "stock": 197
  },
  {
    "product_id": "P0796",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาโรล # 796",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 262.8,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0797",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีมินิเค้ก # 797",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 588.29,
    "category": "CAKE",
    "stock": 36
  },
  {
    "product_id": "P0798",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมติดคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 798 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.74,
    "category": "FUNNY_GIFT",
    "stock": 258
  },
  {
    "product_id": "P0799",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษซ่อนคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 799 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.72,
    "category": "FUNNY_GIFT",
    "stock": 182
  },
  {
    "product_id": "P0800",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยบราวนี่เค้ก # 800",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 461.97,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0801",
    "vendor_id": "V002",
    "product_name": "ปากกาหมึกหมดผูกแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 801 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.82,
    "category": "FUNNY_GIFT",
    "stock": 535
  },
  {
    "product_id": "P0802",
    "vendor_id": "V003",
    "product_name": "เค้กมะพร้าวลาวา # 802",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 440.22,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0803",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยมินิเค้ก # 803",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 436.2,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0804",
    "vendor_id": "V004",
    "product_name": "ลวดเสียบกระดาษผูกทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 804 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 51.25,
    "category": "FUNNY_GIFT",
    "stock": 480
  },
  {
    "product_id": "P0805",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมเสียบคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 805 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 38.85,
    "category": "FUNNY_GIFT",
    "stock": 940
  },
  {
    "product_id": "P0806",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษแปะคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 806 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 57.26,
    "category": "FUNNY_GIFT",
    "stock": 199
  },
  {
    "product_id": "P0807",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษวางแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 807 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.56,
    "category": "FUNNY_GIFT",
    "stock": 487
  },
  {
    "product_id": "P0808",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 808",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 563.82,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0809",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาลาวา # 809",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 319.01,
    "category": "CAKE",
    "stock": 37
  },
  {
    "product_id": "P0810",
    "vendor_id": "V003",
    "product_name": "ปากกาหมึกหมดห่อคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 810 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 57.21,
    "category": "FUNNY_GIFT",
    "stock": 427
  },
  {
    "product_id": "P0811",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีคัพเค้ก # 811",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 280.97,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0812",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 812",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 482.39,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0813",
    "vendor_id": "V005",
    "product_name": "ฝาจีบน้ำอัดลมผูกเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 813 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.61,
    "category": "FUNNY_GIFT",
    "stock": 247
  },
  {
    "product_id": "P0814",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตคัพเค้ก # 814",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 559.07,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0815",
    "vendor_id": "V001",
    "product_name": "เค้กเรดเวลเวตหน้านิ่ม # 815",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 215.05,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0816",
    "vendor_id": "V004",
    "product_name": "ทิชชูเปียกโปรยเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 816 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.5,
    "category": "FUNNY_GIFT",
    "stock": 897
  },
  {
    "product_id": "P0817",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกซ่อนคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 817 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.31,
    "category": "FUNNY_GIFT",
    "stock": 571
  },
  {
    "product_id": "P0818",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 818",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 427.83,
    "category": "CAKE",
    "stock": 10
  },
  {
    "product_id": "P0819",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกวางสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 819 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.96,
    "category": "FUNNY_GIFT",
    "stock": 267
  },
  {
    "product_id": "P0820",
    "vendor_id": "V005",
    "product_name": "เค้กส้มหน้านิ่ม # 820",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 387.76,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0821",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตโรล # 821",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 451.98,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0822",
    "vendor_id": "V004",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเสียบคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 822 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.65,
    "category": "FUNNY_GIFT",
    "stock": 101
  },
  {
    "product_id": "P0823",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาเครปเค้ก # 823",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 450.76,
    "category": "CAKE",
    "stock": 44
  },
  {
    "product_id": "P0824",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดซ่อนคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 824 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.44,
    "category": "FUNNY_GIFT",
    "stock": 412
  },
  {
    "product_id": "P0825",
    "vendor_id": "V003",
    "product_name": "ไม้จิ้มฟันวางทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 825 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 30.2,
    "category": "FUNNY_GIFT",
    "stock": 136
  },
  {
    "product_id": "P0826",
    "vendor_id": "V001",
    "product_name": "เค้กมะพร้าวพุดดิ้งเค้ก # 826",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 381.87,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0827",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 827",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 551.15,
    "category": "CAKE",
    "stock": 47
  },
  {
    "product_id": "P0828",
    "vendor_id": "V002",
    "product_name": "ทิชชูเปียกโปรยทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 828 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.37,
    "category": "FUNNY_GIFT",
    "stock": 882
  },
  {
    "product_id": "P0829",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษวางเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 829 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.97,
    "category": "FUNNY_GIFT",
    "stock": 198
  },
  {
    "product_id": "P0830",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาเครปเค้ก # 830",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 437.68,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0831",
    "vendor_id": "V003",
    "product_name": "ห่อบับเบิ้ลกันกระแทกห่อเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 831 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.39,
    "category": "FUNNY_GIFT",
    "stock": 568
  },
  {
    "product_id": "P0832",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาเครปเค้ก # 832",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 107.32,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0833",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีมินิเค้ก # 833",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 126.99,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0834",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดแปะคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 834 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.54,
    "category": "FUNNY_GIFT",
    "stock": 301
  },
  {
    "product_id": "P0835",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆห่อเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 835 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.24,
    "category": "FUNNY_GIFT",
    "stock": 894
  },
  {
    "product_id": "P0836",
    "vendor_id": "V004",
    "product_name": "เค้กมะพร้าวหน้านิ่ม # 836",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 399.39,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0837",
    "vendor_id": "V003",
    "product_name": "คลิปหนีบกระดาษแปะทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 837 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.09,
    "category": "FUNNY_GIFT",
    "stock": 674
  },
  {
    "product_id": "P0838",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะพุดดิ้งเค้ก # 838",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 312.65,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0839",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆผูกสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 839 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 13.57,
    "category": "FUNNY_GIFT",
    "stock": 685
  },
  {
    "product_id": "P0840",
    "vendor_id": "V004",
    "product_name": "ฝาจีบน้ำอัดลมแปะคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 840 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.18,
    "category": "FUNNY_GIFT",
    "stock": 794
  },
  {
    "product_id": "P0841",
    "vendor_id": "V003",
    "product_name": "เค้กสตรอว์เบอร์รีพุดดิ้งเค้ก # 841",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 437.24,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0842",
    "vendor_id": "V004",
    "product_name": "เค้กมะพร้าวคัพเค้ก # 842",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 473.2,
    "category": "CAKE",
    "stock": 21
  },
  {
    "product_id": "P0843",
    "vendor_id": "V005",
    "product_name": "การ์ดเปล่าเขียนผิดเสียบเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 843 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 43.31,
    "category": "FUNNY_GIFT",
    "stock": 472
  },
  {
    "product_id": "P0844",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลามินิเค้ก # 844",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 169.76,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0845",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกติดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 845 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.29,
    "category": "FUNNY_GIFT",
    "stock": 933
  },
  {
    "product_id": "P0846",
    "vendor_id": "V004",
    "product_name": "ไม้จิ้มฟันโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 846 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.16,
    "category": "FUNNY_GIFT",
    "stock": 290
  },
  {
    "product_id": "P0847",
    "vendor_id": "V001",
    "product_name": "เค้กมัทฉะพุดดิ้งเค้ก # 847",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 338.81,
    "category": "CAKE",
    "stock": 22
  },
  {
    "product_id": "P0848",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 848 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.69,
    "category": "FUNNY_GIFT",
    "stock": 233
  },
  {
    "product_id": "P0849",
    "vendor_id": "V002",
    "product_name": "การ์ดเปล่าเขียนผิดแปะคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 849 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.57,
    "category": "FUNNY_GIFT",
    "stock": 675
  },
  {
    "product_id": "P0850",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟชีสเค้ก # 850",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 533.19,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0851",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตลาวา # 851",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 637.27,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0852",
    "vendor_id": "V001",
    "product_name": "การ์ดเปล่าเขียนผิดผูกแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 852 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 51.77,
    "category": "FUNNY_GIFT",
    "stock": 491
  },
  {
    "product_id": "P0853",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตมินิเค้ก # 853",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 625.8,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0854",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟคัพเค้ก # 854",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 515.21,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0855",
    "vendor_id": "V004",
    "product_name": "ลวดเสียบกระดาษแปะแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 855 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.66,
    "category": "FUNNY_GIFT",
    "stock": 377
  },
  {
    "product_id": "P0856",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตคัพเค้ก # 856",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 462.18,
    "category": "CAKE",
    "stock": 24
  },
  {
    "product_id": "P0857",
    "vendor_id": "V004",
    "product_name": "เค้กเรดเวลเวตบราวนี่เค้ก # 857",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 333.76,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0858",
    "vendor_id": "V001",
    "product_name": "ปากกาหมึกหมดมัดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 858 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.97,
    "category": "FUNNY_GIFT",
    "stock": 411
  },
  {
    "product_id": "P0859",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีหน้านิ่ม # 859",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 446.4,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0860",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะพุดดิ้งเค้ก # 860",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 567.17,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0861",
    "vendor_id": "V005",
    "product_name": "ปากกาหมึกหมดผูกแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 861 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.81,
    "category": "FUNNY_GIFT",
    "stock": 609
  },
  {
    "product_id": "P0862",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะเครปเค้ก # 862",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 160.77,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0863",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟบราวนี่เค้ก # 863",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 116.74,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0864",
    "vendor_id": "V002",
    "product_name": "ทิชชูเปียกวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 864 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 51.91,
    "category": "FUNNY_GIFT",
    "stock": 270
  },
  {
    "product_id": "P0865",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวหน้านิ่ม # 865",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 601.76,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0866",
    "vendor_id": "V004",
    "product_name": "เค้กส้มเครปเค้ก # 866",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 264.93,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0867",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกเสียบเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 867 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 33.7,
    "category": "FUNNY_GIFT",
    "stock": 745
  },
  {
    "product_id": "P0868",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาบราวนี่เค้ก # 868",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 234.84,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0869",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 869",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 434.07,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0870",
    "vendor_id": "V001",
    "product_name": "การ์ดเปล่าเขียนผิดติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 870 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 58.39,
    "category": "FUNNY_GIFT",
    "stock": 201
  },
  {
    "product_id": "P0871",
    "vendor_id": "V001",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 871",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 217.38,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0872",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยลาวา # 872",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 284.23,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0873",
    "vendor_id": "V003",
    "product_name": "ปากกาหมึกหมดห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 873 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.43,
    "category": "FUNNY_GIFT",
    "stock": 499
  },
  {
    "product_id": "P0874",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีหน้านิ่ม # 874",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 122.16,
    "category": "CAKE",
    "stock": 10
  },
  {
    "product_id": "P0875",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดผูกเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 875 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 29.9,
    "category": "FUNNY_GIFT",
    "stock": 971
  },
  {
    "product_id": "P0876",
    "vendor_id": "V001",
    "product_name": "สติ๊กเกอร์กวนๆโปรยคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 876 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 10.25,
    "category": "FUNNY_GIFT",
    "stock": 760
  },
  {
    "product_id": "P0877",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 877",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 333.18,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0878",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟชอร์ตเค้ก # 878",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 448.31,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0879",
    "vendor_id": "V001",
    "product_name": "ไม้จิ้มฟันห่อสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 879 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.77,
    "category": "FUNNY_GIFT",
    "stock": 752
  },
  {
    "product_id": "P0880",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีชีสเค้ก # 880",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 128.19,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0881",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลามินิเค้ก # 881",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 251.72,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0882",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันมัดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 882 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 52.26,
    "category": "FUNNY_GIFT",
    "stock": 383
  },
  {
    "product_id": "P0883",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 883",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 114.28,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0884",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตลาวา # 884",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 301.91,
    "category": "CAKE",
    "stock": 45
  },
  {
    "product_id": "P0885",
    "vendor_id": "V005",
    "product_name": "ปากกาหมึกหมดมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 885 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.11,
    "category": "FUNNY_GIFT",
    "stock": 852
  },
  {
    "product_id": "P0886",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟเครปเค้ก # 886",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 453.95,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0887",
    "vendor_id": "V001",
    "product_name": "เค้กเรดเวลเวตพุดดิ้งเค้ก # 887",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 224.82,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0888",
    "vendor_id": "V004",
    "product_name": "สติ๊กเกอร์กวนๆติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 888 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.36,
    "category": "FUNNY_GIFT",
    "stock": 401
  },
  {
    "product_id": "P0889",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาบราวนี่เค้ก # 889",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 443.86,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0890",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะมินิเค้ก # 890",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 253.71,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0891",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกติดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 891 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.8,
    "category": "FUNNY_GIFT",
    "stock": 630
  },
  {
    "product_id": "P0892",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวมินิเค้ก # 892",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 384.94,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0893",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวชีสเค้ก # 893",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 369.14,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0894",
    "vendor_id": "V001",
    "product_name": "ฝาจีบน้ำอัดลมเหน็บเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 894 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.75,
    "category": "FUNNY_GIFT",
    "stock": 575
  },
  {
    "product_id": "P0895",
    "vendor_id": "V003",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 895",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 590.7,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0896",
    "vendor_id": "V001",
    "product_name": "เค้กสตรอว์เบอร์รีเครปเค้ก # 896",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 453.81,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0897",
    "vendor_id": "V002",
    "product_name": "ปากกาหมึกหมดมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 897 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.31,
    "category": "FUNNY_GIFT",
    "stock": 257
  },
  {
    "product_id": "P0898",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกห่อสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 898 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 22.59,
    "category": "FUNNY_GIFT",
    "stock": 427
  },
  {
    "product_id": "P0899",
    "vendor_id": "V001",
    "product_name": "เค้กวนิลลาลาวา # 899",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 571.32,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0900",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 900 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 45.52,
    "category": "FUNNY_GIFT",
    "stock": 970
  },
  {
    "product_id": "P0901",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยพุดดิ้งเค้ก # 901",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 151.24,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0902",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีหน้านิ่ม # 902",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 156.97,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0903",
    "vendor_id": "V001",
    "product_name": "ปากกาหมึกหมดเหน็บคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 903 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.51,
    "category": "FUNNY_GIFT",
    "stock": 913
  },
  {
    "product_id": "P0904",
    "vendor_id": "V002",
    "product_name": "เค้กเรดเวลเวตคัพเค้ก # 904",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 621.43,
    "category": "CAKE",
    "stock": 46
  },
  {
    "product_id": "P0905",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาชอร์ตเค้ก # 905",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 472.7,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0906",
    "vendor_id": "V002",
    "product_name": "ปากกาหมึกหมดวางเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 906 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.32,
    "category": "FUNNY_GIFT",
    "stock": 627
  },
  {
    "product_id": "P0907",
    "vendor_id": "V003",
    "product_name": "เค้กกาแฟลาวา # 907",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 645.27,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0908",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดแปะคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 908 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.0,
    "category": "FUNNY_GIFT",
    "stock": 361
  },
  {
    "product_id": "P0909",
    "vendor_id": "V002",
    "product_name": "หนังยางแดงแปะสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 909 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.37,
    "category": "FUNNY_GIFT",
    "stock": 468
  },
  {
    "product_id": "P0910",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลาพุดดิ้งเค้ก # 910",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 292.09,
    "category": "CAKE",
    "stock": 11
  },
  {
    "product_id": "P0911",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ไม้จิ้มฟันมัดเพื่อนสนิท",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 911 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.47,
    "category": "FUNNY_GIFT",
    "stock": 356
  },
  {
    "product_id": "P0912",
    "vendor_id": "V001",
    "product_name": "การ์ดเปล่าเขียนผิดโปรยคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 912 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 40.63,
    "category": "FUNNY_GIFT",
    "stock": 114
  },
  {
    "product_id": "P0913",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตชอร์ตเค้ก # 913",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 633.82,
    "category": "CAKE",
    "stock": 40
  },
  {
    "product_id": "P0914",
    "vendor_id": "V002",
    "product_name": "เค้กส้มชอร์ตเค้ก # 914",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 252.93,
    "category": "CAKE",
    "stock": 27
  },
  {
    "product_id": "P0915",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษมัดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 915 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.45,
    "category": "FUNNY_GIFT",
    "stock": 185
  },
  {
    "product_id": "P0916",
    "vendor_id": "V004",
    "product_name": "เค้กกาแฟชีสเค้ก # 916",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 678.11,
    "category": "CAKE",
    "stock": 18
  },
  {
    "product_id": "P0917",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 917",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 400.24,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0918",
    "vendor_id": "V001",
    "product_name": "คลิปหนีบกระดาษห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 918 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 53.19,
    "category": "FUNNY_GIFT",
    "stock": 283
  },
  {
    "product_id": "P0919",
    "vendor_id": "V003",
    "product_name": "เค้กส้มเครปเค้ก # 919",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 408.58,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0920",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกผูกเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 920 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 54.34,
    "category": "FUNNY_GIFT",
    "stock": 710
  },
  {
    "product_id": "P0921",
    "vendor_id": "V001",
    "product_name": "การ์ดเปล่าเขียนผิดซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 921 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.83,
    "category": "FUNNY_GIFT",
    "stock": 696
  },
  {
    "product_id": "P0922",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟหน้านิ่ม # 922",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 420.05,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0923",
    "vendor_id": "V004",
    "product_name": "เค้กบลูเบอร์รีชีสเค้ก # 923",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 502.56,
    "category": "CAKE",
    "stock": 32
  },
  {
    "product_id": "P0924",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดห่อทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 924 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.88,
    "category": "FUNNY_GIFT",
    "stock": 233
  },
  {
    "product_id": "P0925",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 925 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 11.3,
    "category": "FUNNY_GIFT",
    "stock": 348
  },
  {
    "product_id": "P0926",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาหน้านิ่ม # 926",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 459.45,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0927",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ฝาจีบน้ำอัดลมซ่อนคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 927 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.66,
    "category": "FUNNY_GIFT",
    "stock": 176
  },
  {
    "product_id": "P0928",
    "vendor_id": "V002",
    "product_name": "เค้กมัทฉะชอร์ตเค้ก # 928",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 416.31,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0929",
    "vendor_id": "V002",
    "product_name": "เค้กวนิลลาชีสเค้ก # 929",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 345.52,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0930",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษโปรยเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 930 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.41,
    "category": "FUNNY_GIFT",
    "stock": 803
  },
  {
    "product_id": "P0931",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกซ่อนทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 931 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 28.94,
    "category": "FUNNY_GIFT",
    "stock": 237
  },
  {
    "product_id": "P0932",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 932",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 640.64,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0933",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ปากกาหมึกหมดซ่อนเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 933 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.09,
    "category": "FUNNY_GIFT",
    "stock": 930
  },
  {
    "product_id": "P0934",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆเหน็บคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 934 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 18.92,
    "category": "FUNNY_GIFT",
    "stock": 208
  },
  {
    "product_id": "P0935",
    "vendor_id": "V004",
    "product_name": "เค้กส้มหน้านิ่ม # 935",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 435.53,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0936",
    "vendor_id": "V004",
    "product_name": "หนังยางแดงมัดแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 936 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 49.02,
    "category": "FUNNY_GIFT",
    "stock": 184
  },
  {
    "product_id": "P0937",
    "vendor_id": "V004",
    "product_name": "เค้กสตรอว์เบอร์รีลาวา # 937",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 331.86,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0938",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆวางคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 938 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.05,
    "category": "FUNNY_GIFT",
    "stock": 234
  },
  {
    "product_id": "P0939",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกเสียบสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 939 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 48.75,
    "category": "FUNNY_GIFT",
    "stock": 193
  },
  {
    "product_id": "P0940",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีลาวา # 940",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 256.12,
    "category": "CAKE",
    "stock": 15
  },
  {
    "product_id": "P0941",
    "vendor_id": "V003",
    "product_name": "เค้กช็อกโกแลตเครปเค้ก # 941",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 316.18,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0942",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงผูกเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 942 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.85,
    "category": "FUNNY_GIFT",
    "stock": 845
  },
  {
    "product_id": "P0943",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงซ่อนคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 943 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 34.49,
    "category": "FUNNY_GIFT",
    "stock": 118
  },
  {
    "product_id": "P0944",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟคัพเค้ก # 944",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 133.24,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0945",
    "vendor_id": "V005",
    "product_name": "ทิชชูเปียกแปะคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 945 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.04,
    "category": "FUNNY_GIFT",
    "stock": 801
  },
  {
    "product_id": "P0946",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "สติ๊กเกอร์กวนๆผูกสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 946 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.31,
    "category": "FUNNY_GIFT",
    "stock": 982
  },
  {
    "product_id": "P0947",
    "vendor_id": "V005",
    "product_name": "เค้กกาแฟบราวนี่เค้ก # 947",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 510.08,
    "category": "CAKE",
    "stock": 20
  },
  {
    "product_id": "P0948",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดแปะเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 948 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 27.59,
    "category": "FUNNY_GIFT",
    "stock": 759
  },
  {
    "product_id": "P0949",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกติดเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 949 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 43.69,
    "category": "FUNNY_GIFT",
    "stock": 399
  },
  {
    "product_id": "P0950",
    "vendor_id": "V003",
    "product_name": "เค้กส้มเครปเค้ก # 950",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 384.95,
    "category": "CAKE",
    "stock": 42
  },
  {
    "product_id": "P0951",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงเหน็บคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 951 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 56.67,
    "category": "FUNNY_GIFT",
    "stock": 939
  },
  {
    "product_id": "P0952",
    "vendor_id": "V004",
    "product_name": "เค้กช็อกโกแลตชีสเค้ก # 952",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 106.54,
    "category": "CAKE",
    "stock": 25
  },
  {
    "product_id": "P0953",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยเครปเค้ก # 953",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 502.61,
    "category": "CAKE",
    "stock": 23
  },
  {
    "product_id": "P0954",
    "vendor_id": "V001",
    "product_name": "ลวดเสียบกระดาษติดคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 954 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 15.81,
    "category": "FUNNY_GIFT",
    "stock": 977
  },
  {
    "product_id": "P0955",
    "vendor_id": "V002",
    "product_name": "เค้กชาไทยหน้านิ่ม # 955",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 286.03,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0956",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษผูกคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 956 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 37.04,
    "category": "FUNNY_GIFT",
    "stock": 582
  },
  {
    "product_id": "P0957",
    "vendor_id": "V003",
    "product_name": "ลวดเสียบกระดาษผูกสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 957 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 20.14,
    "category": "FUNNY_GIFT",
    "stock": 161
  },
  {
    "product_id": "P0958",
    "vendor_id": "V001",
    "product_name": "เค้กบลูเบอร์รีหน้านิ่ม # 958",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 511.67,
    "category": "CAKE",
    "stock": 50
  },
  {
    "product_id": "P0959",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะบราวนี่เค้ก # 959",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 360.41,
    "category": "CAKE",
    "stock": 33
  },
  {
    "product_id": "P0960",
    "vendor_id": "V004",
    "product_name": "หนังยางแดงเหน็บคนขี้งอน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 960 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 56.34,
    "category": "FUNNY_GIFT",
    "stock": 316
  },
  {
    "product_id": "P0961",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ห่อบับเบิ้ลกันกระแทกติดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 961 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 23.52,
    "category": "FUNNY_GIFT",
    "stock": 294
  },
  {
    "product_id": "P0962",
    "vendor_id": "V005",
    "product_name": "เค้กมัทฉะคัพเค้ก # 962",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 433.35,
    "category": "CAKE",
    "stock": 43
  },
  {
    "product_id": "P0963",
    "vendor_id": "V003",
    "product_name": "ทิชชูเปียกโปรยทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 963 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 21.56,
    "category": "FUNNY_GIFT",
    "stock": 727
  },
  {
    "product_id": "P0964",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยชีสเค้ก # 964",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 688.55,
    "category": "CAKE",
    "stock": 29
  },
  {
    "product_id": "P0965",
    "vendor_id": "V004",
    "product_name": "เค้กชาไทยหน้านิ่ม # 965",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 144.78,
    "category": "CAKE",
    "stock": 31
  },
  {
    "product_id": "P0966",
    "vendor_id": "V004",
    "product_name": "การ์ดเปล่าเขียนผิดห่อคนงบน้อย",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 966 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 35.52,
    "category": "FUNNY_GIFT",
    "stock": 970
  },
  {
    "product_id": "P0967",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "การ์ดเปล่าเขียนผิดเหน็บคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 967 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.22,
    "category": "FUNNY_GIFT",
    "stock": 743
  },
  {
    "product_id": "P0968",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟมินิเค้ก # 968",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 475.69,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0969",
    "vendor_id": "V001",
    "product_name": "ฝาจีบน้ำอัดลมซ่อนแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 969 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 53.51,
    "category": "FUNNY_GIFT",
    "stock": 530
  },
  {
    "product_id": "P0970",
    "vendor_id": "V003",
    "product_name": "เค้กวนิลลาลาวา # 970",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 358.36,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0971",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟบราวนี่เค้ก # 971",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 133.53,
    "category": "CAKE",
    "stock": 39
  },
  {
    "product_id": "P0972",
    "vendor_id": "V003",
    "product_name": "การ์ดเปล่าเขียนผิดเหน็บแกล้งเพื่อน",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 972 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 32.88,
    "category": "FUNNY_GIFT",
    "stock": 349
  },
  {
    "product_id": "P0973",
    "vendor_id": "V005",
    "product_name": "เค้กวนิลลามินิเค้ก # 973",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 595.82,
    "category": "CAKE",
    "stock": 48
  },
  {
    "product_id": "P0974",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ทิชชูเปียกห่อคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 974 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 42.73,
    "category": "FUNNY_GIFT",
    "stock": 868
  },
  {
    "product_id": "P0975",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกห่อเซอร์ไพรส์",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 975 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 26.51,
    "category": "FUNNY_GIFT",
    "stock": 145
  },
  {
    "product_id": "P0976",
    "vendor_id": "V005",
    "product_name": "เค้กชาไทยพุดดิ้งเค้ก # 976",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 566.22,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0977",
    "vendor_id": "V002",
    "product_name": "เค้กกาแฟโรล # 977",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 275.57,
    "category": "CAKE",
    "stock": 28
  },
  {
    "product_id": "P0978",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "ลวดเสียบกระดาษโปรยคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 978 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 39.74,
    "category": "FUNNY_GIFT",
    "stock": 695
  },
  {
    "product_id": "P0979",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "หนังยางแดงวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 979 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 17.5,
    "category": "FUNNY_GIFT",
    "stock": 223
  },
  {
    "product_id": "P0980",
    "vendor_id": "V005",
    "product_name": "เค้กเรดเวลเวตชอร์ตเค้ก # 980",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 222.35,
    "category": "CAKE",
    "stock": 13
  },
  {
    "product_id": "P0981",
    "vendor_id": "V001",
    "product_name": "ทิชชูเปียกโปรยสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 981 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 31.38,
    "category": "FUNNY_GIFT",
    "stock": 634
  },
  {
    "product_id": "P0982",
    "vendor_id": "V004",
    "product_name": "เค้กมัทฉะลาวา # 982",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 465.32,
    "category": "CAKE",
    "stock": 14
  },
  {
    "product_id": "P0983",
    "vendor_id": "V005",
    "product_name": "เค้กช็อกโกแลตบราวนี่เค้ก # 983",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 322.27,
    "category": "CAKE",
    "stock": 26
  },
  {
    "product_id": "P0984",
    "vendor_id": "V002",
    "product_name": "ห่อบับเบิ้ลกันกระแทกติดคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 984 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 16.22,
    "category": "FUNNY_GIFT",
    "stock": 989
  },
  {
    "product_id": "P0985",
    "vendor_id": "V002",
    "product_name": "เค้กบลูเบอร์รีบราวนี่เค้ก # 985",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 447.53,
    "category": "CAKE",
    "stock": 49
  },
  {
    "product_id": "P0986",
    "vendor_id": "V003",
    "product_name": "เค้กมัทฉะพุดดิ้งเค้ก # 986",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 232.24,
    "category": "CAKE",
    "stock": 35
  },
  {
    "product_id": "P0987",
    "vendor_id": "V003",
    "product_name": "ห่อบับเบิ้ลกันกระแทกวางคนโสด",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 987 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 53.27,
    "category": "FUNNY_GIFT",
    "stock": 824
  },
  {
    "product_id": "P0988",
    "vendor_id": "V004",
    "product_name": "เค้กบลูเบอร์รีเครปเค้ก # 988",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 614.71,
    "category": "CAKE",
    "stock": 41
  },
  {
    "product_id": "P0989",
    "vendor_id": "V002",
    "product_name": "เค้กช็อกโกแลตมินิเค้ก # 989",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 676.53,
    "category": "CAKE",
    "stock": 12
  },
  {
    "product_id": "P0990",
    "vendor_id": "V003",
    "product_name": "หนังยางแดงห่อทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 990 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 25.4,
    "category": "FUNNY_GIFT",
    "stock": 300
  },
  {
    "product_id": "P0991",
    "vendor_id": "V005",
    "product_name": "เค้กสตรอว์เบอร์รีมินิเค้ก # 991",
    "Description": "เค้กขนาด 15 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 554.09,
    "category": "CAKE",
    "stock": 16
  },
  {
    "product_id": "P0992",
    "vendor_id": "V001",
    "product_name": "เค้กกาแฟชอร์ตเค้ก # 992",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 342.52,
    "category": "CAKE",
    "stock": 17
  },
  {
    "product_id": "P0993",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษเหน็บสายฮา",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 993 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 46.78,
    "category": "FUNNY_GIFT",
    "stock": 886
  },
  {
    "product_id": "P0994",
    "vendor_id": "V_SYSTEM_JOKER",
    "product_name": "คลิปหนีบกระดาษติดเจ้าระเบียบ",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 994 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 44.68,
    "category": "FUNNY_GIFT",
    "stock": 363
  },
  {
    "product_id": "P0995",
    "vendor_id": "V003",
    "product_name": "เค้กชาไทยพุดดิ้งเค้ก # 995",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 579.26,
    "category": "CAKE",
    "stock": 34
  },
  {
    "product_id": "P0996",
    "vendor_id": "V001",
    "product_name": "หนังยางแดงวางคนนอนดึก",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 996 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 47.29,
    "category": "FUNNY_GIFT",
    "stock": 748
  },
  {
    "product_id": "P0997",
    "vendor_id": "V002",
    "product_name": "เค้กสตรอว์เบอร์รีหน้านิ่ม # 997",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 234.09,
    "category": "CAKE",
    "stock": 19
  },
  {
    "product_id": "P0998",
    "vendor_id": "V005",
    "product_name": "เค้กบลูเบอร์รีชอร์ตเค้ก # 998",
    "Description": "เค้กขนาด 25 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 172.21,
    "category": "CAKE",
    "stock": 46
  },
  {
    "product_id": "P0999",
    "vendor_id": "V002",
    "product_name": "ปากกาหมึกหมดมัดทาสแมว",
    "Description": "ของขวัญสุดปั่นชิ้นที่ 999 งบน้อย แต่อยากสร้างเสียงฮาและรอยยิ้ม",
    "price": 41.61,
    "category": "FUNNY_GIFT",
    "stock": 240
  },
  {
    "product_id": "P1000",
    "vendor_id": "V002",
    "product_name": "เค้กมะพร้าวชีสเค้ก # 1000",
    "Description": "เค้กขนาด 20 oz นุ่มลิ้น หวานกำลังดี สูตรพิเศษ",
    "price": 654.24,
    "category": "CAKE",
    "stock": 35
  }
];;
db.products.insertMany(mockProducts);

console.log('Successfully generated 1000 products into products_mock_1000.json');