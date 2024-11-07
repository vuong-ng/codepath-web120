import { createClient } from '@supabase/supabase-js'
const URL = 'https://uaewiiqkyrroynlpturx.supabase.co';
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhZXdpaXFreXJyb3lubHB0dXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5NDA3MzcsImV4cCI6MjA0NjUxNjczN30.0WzpvXpNjuawwsM1Ckf4QKFQ-bl5QpCe8WHmjDd9CjY"
export const supabase = createClient(URL, API_KEY);
