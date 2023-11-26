import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqrbbeinboqaqqybmxxz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcmJiZWluYm9xYXFxeWJteHh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1ODUzMjQsImV4cCI6MjAxNjE2MTMyNH0.DrhmCmZwXtheP0_HbK8TOHGmbjM4HJtx-BGDKWFTrb0'
export const supabase = createClient(supabaseUrl, supabaseKey)