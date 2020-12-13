import { Request, Response } from "express";

export interface IExpressRouteCallback {
  (req: Request, res: Response): Promise<void>;
}
