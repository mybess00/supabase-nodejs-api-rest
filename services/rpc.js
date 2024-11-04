import { SupabaseQuery } from "../repositories/supabase.js";

export default class DataService {
    static async runFunction ({ params, body, headers }) {
        const { name } = params
        const contentType = headers["content-type"]
        const args = contentType?.includes("application/json") ? body.payload : body
        
        const {data, error} = await SupabaseQuery.rpcFunction({ name, args })

        return {data, error}
    }
}