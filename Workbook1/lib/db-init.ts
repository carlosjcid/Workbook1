import { supabase } from "@/lib/supabase"

export async function initializeDatabase() {
  try {
    // Check if user_progress table exists
    const { error: checkError } = await supabase.from("user_progress").select("id").limit(1)

    if (checkError && checkError.message.includes("does not exist")) {
      console.log("Creating database tables...")

      // Create user_progress table
      const { error: createProgressError } = await supabase.rpc("create_user_progress_table")
      if (createProgressError) {
        // If RPC fails, try direct SQL (this requires more permissions)
        await supabase.rpc("execute_sql", {
          sql_query: `
            CREATE TABLE IF NOT EXISTS user_progress (
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              user_id TEXT NOT NULL,
              section VARCHAR NOT NULL,
              completed BOOLEAN DEFAULT FALSE,
              last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              UNIQUE(user_id, section)
            );
            
            CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
          `,
        })
      }

      // Create section_answers table
      const { error: createAnswersError } = await supabase.rpc("create_section_answers_table")
      if (createAnswersError) {
        // If RPC fails, try direct SQL
        await supabase.rpc("execute_sql", {
          sql_query: `
            CREATE TABLE IF NOT EXISTS section_answers (
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              user_id TEXT NOT NULL,
              section VARCHAR NOT NULL,
              question_id VARCHAR NOT NULL,
              answer TEXT,
              last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              UNIQUE(user_id, section, question_id)
            );
            
            CREATE INDEX IF NOT EXISTS idx_section_answers_user_id ON section_answers(user_id);
            CREATE INDEX IF NOT EXISTS idx_section_answers_section ON section_answers(section);
          `,
        })
      }

      console.log("Database tables created successfully")
    }

    return true
  } catch (error) {
    console.error("Error initializing database:", error)
    return false
  }
}
