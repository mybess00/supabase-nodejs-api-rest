import { Router } from "express"
import RpcController from "../controllers/rpc.js"

export const rpcRouter = Router()

rpcRouter.post("/:name", RpcController.runFunction)