import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'mongoose',
    uri: env('DATABASE_URI'), // 使用完整的连接字符串
    options: {
      ssl: env.bool('DATABASE_SSL', true), // Atlas 通常需要 SSL
      authenticationDatabase: env('DATABASE_AUTHENTICATION_DATABASE', null), // 如果需要指定认证数据库
    },
  },
});