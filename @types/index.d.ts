declare namespace NodeJS {
  export interface ProcessEnv {
    // DB
    DATABASE_PORT: number;
    DATABASE_HOST: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE: string;

    // RabbitMQ
    RMQ_USER: string;
    RMQ_PASSWORD: string;
    RMQ_QUEUE: string;
    RMQ_URL: string;
  }
}
