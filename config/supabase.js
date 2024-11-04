import { createClient } from '@supabase/supabase-js'

const { SUPABASE_DOMAIN, SUPABASE_API_KEY } = process.env

export function setupSupabase ({ schema }) {
    const options = {
        db: {
          schema: schema || 'public',
        },
      }
      const supabase = createClient(SUPABASE_DOMAIN, SUPABASE_API_KEY, options)
      return supabase
}
