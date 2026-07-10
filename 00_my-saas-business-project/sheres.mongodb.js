use("voice_meme");

db.shares.deleteMany({});

const sharesArray = [];

for (let i = 1; i <= 1000; i++) {
  const idStr = String(i).padStart(3, '0');
  const diaryIdStr = String(1000 + i);
  const receiverId = String(Math.floor(Math.random() * 1000) + 1).padStart(3, '0');
  
  sharesArray.push({
    "share_id": String(5000 + i),
    "diary_id": diaryIdStr,
    "receiver_user_id": receiverId,
    "shared_at": new Date("2026-07-09T14:00:00Z")
  });
}

db.shares.insertMany(sharesArray);
console.log("Shares 1,000 records inserted successfully!");