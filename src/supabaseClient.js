/*
create table driver_leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp default now(),
  full_name text,
  phone text,
  email text,
  vehicle_make_model text,
  vehicle_year integer,
  ownership_type text,
  days_per_week text,
  operating_area text
);
*/

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
