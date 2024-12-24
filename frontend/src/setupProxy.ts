import { createProxyMiddleware } from 'http-proxy-middleware';
import { Express } from 'express';

export default function (app: Express): void {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
}