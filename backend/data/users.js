import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "ronald.mauritsson@gmail.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
    phone: "+256889914434",
  },
  {
    name: "John Snow",
    email: "rwaizone@gmail.com",
    password: bcrypt.hashSync("password", 10),
    isCreator: true,
    phone: "+256889914434",
  },
  {
    name: "Robert Barathoen",
    email: "abk@avarc.co",
    password: bcrypt.hashSync("password", 10),
    isBuyer: true,
    phone: "+256889914434",
  },
];
export default users;
