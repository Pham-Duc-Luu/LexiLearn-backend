import configuration from ' config/configuration';
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const apiKeys: string[] = configuration().getApiKeys();

        const apiKey = req.headers['x-api-key'] as string;

        if (!apiKey || !apiKeys.includes(apiKey)) {
            throw new UnauthorizedException(`Invalid API key`);
        }

        next();
    }
}
