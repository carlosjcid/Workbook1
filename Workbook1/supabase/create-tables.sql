-- Create tables for workbook progress tracking

-- Table for user progress by section
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  section VARCHAR NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, section)
);

-- Table for storing user answers to questions
CREATE TABLE IF NOT EXISTS section_answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  section VARCHAR NOT NULL,
  question_id VARCHAR NOT NULL,
  answer TEXT,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, section, question_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_section_answers_user_id ON section_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_section_answers_section ON section_answers(section);
