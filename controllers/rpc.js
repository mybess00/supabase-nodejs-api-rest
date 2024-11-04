import RpcService from "../services/rpc.js";

export default class RpcController {
    static async runFunction (req, res) {
        const { params, body, headers } = req
        const response = await RpcService.runFunction({ params, body, headers })
        return res.json(response)
    }
}