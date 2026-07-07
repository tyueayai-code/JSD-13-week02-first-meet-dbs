use("sample_mflix");
db.movies.find({ type: "movie", rated: "TV-G" });

db.movies.findOne({ type: "movie", rated: "TV-G" })
