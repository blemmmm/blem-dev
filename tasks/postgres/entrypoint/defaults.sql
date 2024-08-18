/* SCHEMA */

DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA public;

GRANT ALL PRIVILEGES ON DATABASE public TO postgres;

/* TABLES */


CREATE TABLE public.tasks (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL,
  "name" text,
  "description" text,
  "status" text,
  "created_at" timestamptz DEFAULT now() NOT NULL
);

-- Insert data after table creation
INSERT INTO public.tasks ("name", "description", "status", "created_at")
VALUES 
  ('Paint a portrait', 'I want to paint a portrait.', 'completed', now()),
  ('Build a house', 'I want to build a house.', 'in_progress', now()),
  ('Write a book', 'I want to write a book.', 'pending', now());

SELECT * FROM public.tasks;