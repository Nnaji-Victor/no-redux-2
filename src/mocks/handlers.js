import { rest } from "msw";
import { urls } from "../_helpers/urls";
import { v4 as Guid } from 'uuid';

//get users from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];
const delay = process.env.NODE_ENV === 'test' ? 0 : 1500

const handlers = [
  //register
  rest.post(`${urls.APP_URL}/register`, async (req, res, ctx) => {
    if (!req.body.password) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({message: 'password required'}),
      )
    }
    if (!req.body.username) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({message: 'username required'}),
      )
    }
    const user = users.find(x => x.username === req.body.username);
    if(user){
      return res(ctx.delay(delay), ctx.status(409), ctx.json({message: `Username  ${req.body.username} is already taken`}))
    }
    else{
      const newUser = {...req.body, id: Guid()}
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      return res(ctx.delay(delay), ctx.status(200), ctx.json(newUser))
    }
  }),

  //login
  rest.post(`${urls.APP_URL}/login`, (req, res, ctx) => {
    if (!req.body.password) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({message: 'password required'}),
      )
    }
    if (!req.body.username) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({message: 'username required'}),
      )
    }

    const {username, password} = req.body;
    const user = users.find(x => x.username === username && x.password === password);
    if(!user){
      return res(ctx.delay(delay), ctx.status(403), ctx.json({message: `Username or password is incorrect`}))
    }else{
      const newUser = {
        id: user.id, 
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token'
      }
      return res(ctx.delay(delay), ctx.status(200), ctx.json(newUser))
    }

  })
];

export { handlers, rest };