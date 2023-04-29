export interface Question {
    id?: number;
    title?: string;
    body?: string;
    author?: string;
    timestamp?: string;
    tags?: string[];
    votes?: number;
  }