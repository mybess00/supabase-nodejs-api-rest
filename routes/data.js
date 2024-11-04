import { Router } from "express";
import DataController from "../controllers/data.js";

export const dataRouter = Router()

dataRouter.get("/:schema/:table", DataController.getData)
dataRouter.post("/:schema/:table", DataController.postData)
dataRouter.put("/:schema/:table/:id", DataController.putData)
dataRouter.delete("/:schema/:table/:id", DataController.deleteData)