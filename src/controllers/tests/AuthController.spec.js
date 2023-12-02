// const request = require("supertest");
// const { app, server } = require("../../server");
// const UserModel = require("../../models/User");
// const mongoose = require("../../database/index");

// const defaultUser = {
//   nome: "Nome",
//   email: "nome@outlook.com",
//   senha: "12346",
//   telefones: [
//     {
//       numero: 99999999,
//       ddd: 11,
//     },
//   ],
// };

// beforeEach(async () => {
//   await UserModel.deleteOne({ email: "nome@outlook.com" });
//   await UserModel.deleteOne({ email: "teste@outlook.com" });

//   await UserModel.create(defaultUser);
// });

// afterAll(async () => {
//   server.close();
//   await mongoose.connection.close();
// });

// describe("POST /auth/signup", () => {
//   it("Deve criar um usuário com sucesso", async () => {
//     const newUser = {
//       nome: "Teste",
//       email: "teste@outlook.com",
//       senha: "teste123123",
//       telefones: [
//         {
//           numero: 88888888,
//           ddd: 19,
//         },
//       ],
//     };
//     const response = await request(app).post("/auth/signup").send(newUser);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("id");
//     expect(response.body).toHaveProperty("data_criacao");
//     expect(response.body).toHaveProperty("data_atualizacao");
//     expect(response.body).toHaveProperty("ultimo_login");
//     expect(response.body).toHaveProperty("token");
//   });

//   it("Deve retornar um erro ao tentar cadastrar um usuário com e-mail duplicado", async () => {
//     const response = await request(app).post("/auth/signup").send(defaultUser);

//     expect(response.status).toBe(401);
//     expect(response.body).toHaveProperty("mensagem", "Email já existente");
//   });
// });

// describe("POST /auth/signin", () => {
//   it("Deve autenticar um usuário existente com sucesso", async () => {
//     const existingUser = {
//       email: "nome@outlook.com",
//       senha: "12346",
//     };

//     const response = await request(app).post("/auth/signin").send(existingUser);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("id");
//     expect(response.body).toHaveProperty("data_criacao");
//     expect(response.body).toHaveProperty("data_atualizacao");
//     expect(response.body).toHaveProperty("ultimo_login");
//     expect(response.body).toHaveProperty("token");
//   });
// });
