import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";

const app = express();

// Rota para o microsserviço de usuários (user-service)
app.use('/users', createProxyMiddleware({
    target: 'http://user-service:3011', // Use o nome do serviço
    changeOrigin: true,
}));
// Rota para o microsserviço do game (game-service)
app.use('/game', createProxyMiddleware({
    target: 'http://game-service:3012', // URL do product-service
    changeOrigin: true,
}));

// Rota de saúde do API Gateway
app.get('/', (req, res) => {
    res.status(200).send({ status: 'API Gateway is running' });
});

export default app;