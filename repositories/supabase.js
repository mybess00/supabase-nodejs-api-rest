import { setupSupabase } from "../config/supabase.js";

export class SupabaseQuery {
    static async selectData ({ schema, table, fields }) {
        const supabase = setupSupabase(schema)
        try {
            const { data, error } = await supabase.from(table).select(fields || "*")
            return { data, error }
        } catch (error) {
            return { error }
        }
    }
    static async selectDataFiltered ({ schema, table, fields, filters }) {
        const supabase = setupSupabase(schema)
        const { eq, gte, gt, neq, lt, lte, in: include, search } = filters
        let query = supabase.from(table).select(fields || "*")
        
        if (eq) Object.entries(eq).forEach(([column, value]) => query.eq(column, value));
        if (gte) Object.entries(gte).forEach(([column, value]) => query.gte(column, value));
        if (gt) Object.entries(gt).forEach(([column, value]) => query.gt(column, value));
        if (neq) Object.entries(neq).forEach(([column, value]) => query.neq(column, value));
        if (lt) Object.entries(lt).forEach(([column, value]) => query.lt(column, value));
        if (lte) Object.entries(lte).forEach(([column, value]) => query.lte(column, value));
        if (include) Object.entries(include).forEach(([column, value]) => query.in(column, value));
        if (search) Object.entries(search).forEach(([column, value]) => query.textSearch(column, value));
        
        try {
            const { data, error } = await query    
            return { data, error }
        } catch (error) {
            return { error }
        }
    }
    static async insertData ({ schema, table, input }) {
        const supabase = setupSupabase(schema)
        try {
            const { data, error } = await supabase.from(table).insert([...input]).select()
            return { data, error }
        } catch (error) {
            return { error }
        }
    }
    static async updateData ({ schema, table, input, id, pk }) {
        const supabase = setupSupabase(schema)
        try {
            const { data, error } = await supabase.from(table).update(input).eq(pk || "id", id).select()
            return { data, error }
        } catch (error) {
            return { error }
        }
    }
    static async deleteData ({ schema, table, id }) {
        const supabase = setupSupabase(schema)
        try {
            const { data, error } = await supabase.from(table).delete().eq("id", id).select()
            return { data, error }
        } catch (error) {
            return { error }
        }
    }
    static async rpcFunction ({ name, args }) {
        const supabase = setupSupabase({})
        try {
            const { data, error } = await supabase.rpc(name, args)
            return { data, error }
        } catch (error) {
            return { error }
        }
    }
}