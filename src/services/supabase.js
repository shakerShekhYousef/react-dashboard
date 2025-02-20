import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nooygooyukumpkkvnsld.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vb3lnb295dWt1bXBra3Zuc2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MjQ3NjYsImV4cCI6MjAzNzQwMDc2Nn0.JveXPcxsvhSiO51Qc4MsBxZVFrug36pusPJLq0uXKC4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
