import { createClient } from "@supabase/supabase-js";

// Supabase client configuration
// Make sure to add these environment variables to your .env.local file:
// NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Check if Supabase credentials are configured
const isSupabaseConfigured =
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== "your-supabase-project-url" &&
  supabaseUrl.startsWith("http");

// Create client only if properly configured, otherwise use null
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Type definitions for the leads table
export interface Lead {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  work_type: string;
  message: string;
  status?: string;
}

// Helper function to insert a new lead
export async function createLead(data: Omit<Lead, "id" | "created_at" | "status">) {
  if (!supabase) {
    throw new Error(
      "Supabase není nakonfigurován. Přidejte NEXT_PUBLIC_SUPABASE_URL a NEXT_PUBLIC_SUPABASE_ANON_KEY do .env.local souboru."
    );
  }

  const { data: lead, error } = await supabase
    .from("leads")
    .insert([{ ...data, status: "new" }])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return lead;
}
