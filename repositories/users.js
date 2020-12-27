const fs = require("fs");

class UsersRespository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }

    this.filename = filename;
    // can't have async code iwthin constructor
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
}

const repo = new UsersRespository("users.json");
