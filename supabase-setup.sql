-- SQL script for creating the leads table in Supabase
-- Run this in your Supabase SQL editor

-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  work_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' NOT NULL
);

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anonymous inserts (for the contact form)
-- but restricts read/update/delete to authenticated users only
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create a policy for authenticated users to read all leads
CREATE POLICY "Allow authenticated users to read leads" ON leads
  FOR SELECT TO authenticated
  USING (true);

-- Create a policy for authenticated users to update leads
CREATE POLICY "Allow authenticated users to update leads" ON leads
  FOR UPDATE TO authenticated
  USING (true);

-- Optional: Add comments for documentation
COMMENT ON TABLE leads IS 'Table storing contact form submissions from the website';
COMMENT ON COLUMN leads.status IS 'Lead status: new, contacted, in_progress, completed, cancelled';
