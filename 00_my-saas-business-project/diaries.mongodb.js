use("voice_meme");

db.diaries.deleteMany({});

// แยก Quote แบบจึ้งๆ ฮีลใจ สำหรับ Good Day / Bad Day ผสมกลิ่นอายมีม Gen Z
const goodDayQuotes = [
  "วันนี้งานราบรื่นมาก ได้กินกาแฟอร่อยๆ ชีวิตดีสุดๆ (Vibe: รอดตายแบบตัวแม่)",
  "เคลียร์งานเสร็จไว ได้กลับบ้านเร็ว เย้! (Vibe: บุญรักษาพระพายช่วย)",
  "เพื่อนร่วมงานซื้อชาไทยมาฝาก ใจฟูยิ่งกว่ายอดฟอลโลว์",
  "วันนี้ไม่มีใครแกง ชีวิตสงบสุขแบบ 10/10",
  "ตื่นมาไม่ปวดหลัง ถือเป็นชัยชนะที่ยิ่งใหญ่ของวันนี้"
];

const badDayQuotes = [
  "หัวหน้าตำหนิเรื่องงาน โอเคแก้งานให้ดี แต่อย่าลืมซื้อไอติมกินแก้ใจให้สบายนะคนเก่ง",
  "เหนื่อยมากวันนี้ รถติดสุดๆ อยากลาออกไปเป็นภาระให้โลกหมุนต่อ",
  "น้ำตาที่ร่วงหล่นในความเงียบ คือหยาดฝนที่รดรากให้ดอกไม้แห่งความเข้มแข็งในตัวคุณเติบโต",
  "บางครั้งความสำเร็จสูงสุดของวัน คือการยอมรับว่าเราเหนื่อยมากแล้วและอนุญาตให้ตัวเองได้พัก",
  "โลกหมุนไปข้างหน้าเสมอ แต่ถ้าขาไม่ไหว นั่งมองท้องฟ้าตรงนี้ก่อนก็ได้ ไม่เห็นเป็นไรเลย"
];

const diariesArray = [];
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let i = 1; i <= 1000; i++) {
  const idStr = String(i).padStart(3, '0');
  const isGood = i % 2 === 0;
  const quote = isGood ? getRandom(goodDayQuotes) : getRandom(badDayQuotes);
  const category = isGood ? "GOOD_DAY" : "BAD_DAY";
  const diaryIdStr = String(1000 + i);
  
  diariesArray.push({
    "diary_id": diaryIdStr,
    "user_id": idStr,
    "audio_url": `https://storage.cloud.com/audios/genz_${idStr}.mp3`,
    "quote_text": quote + " (#" + i + ")",
    "category": category,
    "created_at": new Date("2026-07-09T13:20:00Z")
  });
}

db.diaries.insertMany(diariesArray);
console.log("Diaries 1,000 records inserted successfully!");