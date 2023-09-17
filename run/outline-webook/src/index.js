import { app, listen } from '@nitra/fastify'
// import { cfSecurity } from '@nitra/cf-security'
// import a from './actions/index.js'

// app.get('/*', async (req, reply) => {
//   req.log.info('get', req.url)
// })
// Обрабатываем только POST
app.post('/*', async (req, reply) => {
  let resp = {}

  try {
    req.log.debug('info', req.url)
    req.log.debug('header', req.headers)
    req.log.debug('body', req.body)
    // const allowedWithoutCheck = ['/github', '/sentry']

    // if (!allowedWithoutCheck.includes(req.url) && !cfSecurity(req)) {
    //   resp.error = 'Nitra security not passed'
    //   return
    // }

    // switch (req.url) {
    //   case '/github': {
    //     // На гітхаб змінилась задача
    //     await a.github(req)
    //     break
    //   }
    //   case '/sentry': {
    //     // В sentry змінилась задача
    //     await a.sentry(req)
    //     break
    //   }
    //   case '/gt-task-active-update': {
    //     // Змінився активний час по користувачу
    //     resp = await a.gtTaskActiveUpdate(req)
    //     break
    //   }
    //   case '/gt-task-create': {
    //     // Закрили задачу
    //     resp = await a.gtTaskCreate(req)
    //     break
    //   }
    //   case '/gt-task-close': {
    //     // Закрили задачу
    //     resp = await a.gtTaskClose(req)
    //     break
    //   }
    //   default: {
    //     resp.error = `Not found url: ${req.url} ...`
    //   }
    // }
  } catch (err) {
    req.log.error(err)
    resp.error = err
  } finally {
    reply.send(resp)
  }
})

// Запускаємо сервер
listen()
