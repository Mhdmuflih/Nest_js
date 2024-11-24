// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
// import { testMiddleware } from "./routeCheck/test.middleware";

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();


async function server() {
  const app =  await NestFactory.create(AppModule);

  // app.use(testMiddleware);

  const port = 2020;
  app.listen(port, () => {
    console.log("server is running...");
  });
}
server();