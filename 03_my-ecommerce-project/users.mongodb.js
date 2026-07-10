use("cake_mee");

db.users.deleteMany({});


const firstNames = [
  "Suda", "Mali", "Anong", "Chai", "Somchai", "Pranee", "Kanya", "Surachai", "Wichai", "Niran",
  "Arun", "Chatchai", "Daranee", "Kanchana", "Malee", "Narumol", "Orathai", "Pornchai", "Ratana", "Sirirat",
  "Thongchai", "Urai", "Vichit", "Wanpen", "Yupa", "Arthit", "Boonma", "Chalit", "Duangjai", "Jintana",
  "Kusuma", "Ladda", "Manit", "Nisa", "Prasert", "Rungroj", "Sanit", "Supachai", "Thanin", "Vilai"
];

const lastNames = [
  "Yueyai", "Srisuk", "Wongsuwan", "Jaidee", "Rakchart", "Sooksabai", "Rungruang", "Charoensuk", "Phongpanich", "Saetang",
  "Limsuwan", "Tangsubwanich", "Chotiphan", "Bunyarat", "Kittisak", "Techavichit", "Sombatpanich", "Ratanavanich", "Panyarat", "Suthirat"
];

const locations = [
  "กรุงโซล55/3 เกาหลีใต้", "กรุงโซล12/1 เกาหลีใต้", "ปูซาน14/2 เกาหลีใต้",
  "กรุงเทพฯ10110 ประเทศไทย", "ระยอง21000 ประเทศไทย", "ชลบุรี20130 ประเทศไทย",
  "เชียงใหม่50200 ประเทศไทย", "ภูเก็ต83000 ประเทศไทย", "ราชบุรี70110 ประเทศไทย"
];

const mockUsers = [];
const baseTime = new Date('2026-07-09T13:14:00Z');

// คำสั่งวนลูปสร้างข้อมูล 1,000 คน
for (let i = 1; i <= 1000; i++) {
  const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
  const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
  const loc = locations[Math.floor(Math.random() * locations.length)];
  
  const userId = `User_${String(i).padStart(4, '0')}_${fn}_${ln}`;
  const userName = `${fn.slice(0, 3)}_${ln.slice(0, 3)}${i}`;
  const email = `${fn.toLowerCase()}_${ln.toLowerCase()}_${i}@gmail.com`;
  const phone = `08${Math.floor(Math.random() * 90 + 10)}-${Math.floor(Math.random() * 900 + 100)}${Math.floor(Math.random() * 90 + 10)}`;
  
  // เพิ่มเวลาทีละ 2 นาทีสำหรับแต่ละเรคอร์ด
  const createAtTime = new Date(baseTime.getTime() + i * 2 * 60000);

  mockUsers.push({
    user_id: userId,
    user_name: userName,
    "e-mail": email,
    Phone_number: phone,
    address: loc,
    create_at: createAtTime.toISOString()
  });

}
db.users.insertMany(mockUsers);
  console.log('Successfully inserted 1000 vendors into database.');
