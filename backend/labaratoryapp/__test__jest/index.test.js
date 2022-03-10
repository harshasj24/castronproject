const { TestWatcher } = require("jest");
const request = require("supertest");

const app = require("../app.js");

describe("POST /users/signup", () => {
  test("OK, Registration is succefull", async () => {
    const res = await request(app).post("/labs/signup").send({
      fName: "MSDhoni",
      email: "MSDhoni0@gmail.com",
      password: "MSDhoni",
      role: "user",
    });
    console.log(res);
    expect(res.statusCode).toEqual(200);
  });
});

describe("POST /labs/login", () => {
  test("OK, Login is Succefull", async () => {
    const res = await request(app).post("/labs/login").send({
      email: "MSDhoni07@gmail.com",
      password: "MSDhoni",
    });
    console.log(res);
    expect(res.statusCode).toEqual(200);
  }, 10000);
});

describe("GET /labs/users", () => {
  test("OK, usersDetails getting done", async () => {
    const res = await request(app).get("/labs/alldata");

    console.log(res);
    expect(res.statusCode).toEqual(200);
  }, 20000);
});

describe("GET /users/edit-users", () => {
  var token = null;
  beforeEach((done) => {
    request(app)
      .post("/labs/updateuser")
      .send({
        email: "Kaveri123@gmail.com",
        password: "Kaveri123@gmail.com",
      })
      .end((err, res) => {
        token = res._body.data.token;
        console.log(token);
        done();
      });
  });

  test("OK, editDetails updated successfully", async () => {
    const res = await request(app).put("/labs/updateuser").send({
      fname: "MSD00007",
      email: "MSDhoni0@gmail.com",
    });

    console.log(res);
    expect(res.statusCode).toEqual(200);
  });
});



describe("GET /samples/samples", () => {
  test("OK, sampleDetails getting done", async () => {
    const res = await request(app).get("/reports/viewreports");

    console.log(res);
    expect(res.statusCode).toEqual(200);
  }, 20000);
});

addreports;

describe("GET editreports", () => {
  test("OK, sampleDetails added", async () => {
    const res = await request(app)
      .post("/reports/addreports")
      .send({
        _id: "621f71f3516b5d9576f45bfc",
        date: "12/25/820",
        sampleId: 12,
        email: "MSDhoni0@gmail.com",
        thyroid: [
          {
            t3Total: 12,
            thyroxine: 25,
            tsh: 12,
          },
        ],
      });

    console.log(res);
    expect(res.statusCode).toEqual(200);
  }, 20000);
});
