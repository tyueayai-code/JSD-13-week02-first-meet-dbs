use("voice_meme");

db.users.deleteMany({});

const shortGenzNames = [
  "นอนไม่หลับ", "ชาบูวิญญาณ", "ติดแกรม", "เรซูเม่พญานาค", "หมูกระทะเยียวยา",
  "ประธานเมา", "ความดันพุ่ง", "หนี้ชาไทย", "วิชามาร", "ต้าวความจน",
  "ล้มละลาย", "เหยื่อวันจันทร์", "สมองไหล", "เซียนคลาวด์", "หมดแรง"
];

const usersArray = [];
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let i = 1; i <= 1000; i++) {
  const idStr = String(i).padStart(3, '0');
  const uniqueName = getRandom(shortGenzNames) + "_" + i;
  
  usersArray.push({
    "user_id": idStr,
    "username": uniqueName,
    "email": `user_${i}@meme.com`,
    "password_hash": `$2a$12$ZetaHashSecure${i}`,
    "created_at": new Date("2026-07-09T13:14:00Z")
  });
}

db.users.insertMany(usersArray);
console.log("Users 1,000 records inserted successfully!");