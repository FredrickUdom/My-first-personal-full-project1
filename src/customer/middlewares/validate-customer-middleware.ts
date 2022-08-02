import { NestMiddleware } from "@nestjs/common";

export class ValidateCustomerMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        
    }
}