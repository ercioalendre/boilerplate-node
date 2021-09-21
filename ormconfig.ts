import { join } from "path";

const appMode = process.env.APP_MODE === "prod" ? "build" : "src";
const dropSchema = process.env.TYPEORM_DROP_SCHEMA === "true" ? true : false;
const migrationsRun = process.env.TYPEORM_MIGRATIONS_RUN === "true" ? true : false;
const logging = process.env.TYPEORM_LOGGING === "true" ? true : false;
const synchronize = process.env.TYPEORM_SYNCHRONIZE === "true" ? true : false;
const database =
  process.env.APP_MODE === "test"
    ? "./src/__tests__/database/falemais.sqlite"
    : process.env.TYPEORM_DB_DATABASE;

module.exports = {
  type: process.env.TYPEORM_DB_TYPE,
  host: process.env.TYPEORM_DB_HOST,
  port: process.env.TYPEORM_DB_PORT,
  username: process.env.TYPEORM_DB_USERNAME,
  password: process.env.TYPEORM_DB_PASSWORD,
  database,
  synchronize,

  /* Log settings */
  logging,
  logger: "file",

  /* Set true for testings */
  dropSchema,
  migrationsRun,

  entities: [join(`./${appMode}/modules/`, "**", "/typeorm/entities/", "*.{ts,js}")],
  migrations: [join(`./${appMode}/shared/`, "/typeorm/migrations/", "*.{ts,js}")],
  cli: {
    migrationsDir: `./${appMode}/shared/typeorm/migrations`,
  },
};
