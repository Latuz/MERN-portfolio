import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Barbara Espinoza",
    email: "bespinoza@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Harry Stuardo",
    email: "harry@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
