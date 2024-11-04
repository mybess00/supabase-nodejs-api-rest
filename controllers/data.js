import DataService from "../services/data.js";

export default class DataController {
    static async getData (req, res) {
        const { params, query } = req
        const response = await DataService.getData({ params, query })
        console.log(req.query)
        return res.json(response)
    }
    static async postData (req, res) {
        const { body, params, headers } = req
        const response = await DataService.postData({ params, body, headers })
        return res.json(response)
    }
    static async putData (req, res) {
        const { body, params, headers } = req
        const response = await DataService.putData({ params, body, headers })
        return res.json(response)
    }
    static async deleteData (req, res) {
        const { params } = req
        const response = await DataService.deleteData(params)
        return res.json(response)
    }
}