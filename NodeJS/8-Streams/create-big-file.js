const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync(
    "../1-Fundamentals/content/bigNewFile.txt",
    `Hello NodeJS ${i}\n`,
    { flag: "a" }
  );
}
