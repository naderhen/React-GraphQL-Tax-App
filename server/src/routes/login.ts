import * as Router from 'koa-router'
import { IUser, User } from '../Models/User'
import passport, { authMiddleware } from '../passport/passport'

const usersRoutes = new Router({
  prefix: '/login'
})

usersRoutes.post(
  '/',
  passport.authenticate('local', { session: false }),
  (ctx: any) => {
    const user: IUser = ctx.req.user
    ctx.body = { jwt: user.generateToken() }
  }
)

usersRoutes.get('/test', authMiddleware, (ctx: any) => {
  ctx.body = ctx.req.user.jwtPayload
})

export default usersRoutes