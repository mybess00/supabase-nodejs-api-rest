import { SupabaseQuery } from "../repositories/supabase.js";

export default class DataService {
    static async getData ({ params, query }) {
        const { schema, table } = params

        if (Object.keys(query).length > 0) {
            const { fields, ...filters } = query
            const { data, error } = await SupabaseQuery.selectDataFiltered({ schema, table, filters, fields })
            return { data, error }
        }

        const {data, error} = await SupabaseQuery.selectData({ schema, table })
        return {data, error}
    }
    static async postData ({ params, body, headers }) {
        const { schema, table } = params

        const contentType = headers["content-type"]
        const input = contentType.includes("application/json") ? body.payload : [body]

        const { data, error } = await SupabaseQuery.insertData({ schema, table, input })
        
        return {data, error}
    }
    static async putData ({params, body, headers }) {
         const { schema, table, id } = params
        
        const contentType = headers["content-type"]
        const { pk, ...input } = contentType.includes("application/json") ? body.payload : body

        const { data, error } = await SupabaseQuery.updateData({ schema, table, input, pk, id })
        
        return {data, error}
    }
    static async deleteData (params) {
        const { schema, table, id } = params
        const { data, error } = await SupabaseQuery.deleteData({ schema, table, id })
        return {data, error}
    }
}