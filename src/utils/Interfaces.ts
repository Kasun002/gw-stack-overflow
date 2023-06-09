export interface Question {
  id?: number;
  title?: string;
  body?: string;
  author?: string;
  timestamp?: string;
  tags?: string[];
  votes?: number;
  isUpdated?: boolean;
}

export interface ContextData {
  questions: Array<Question>,
  updateData: (value: Question) => void;
}

export interface RandomNameHook {
  firstName: string;
  lastName: string;
  generateName: () => void;
}

export interface HeaderTitle {
  title?: string;
  urlText?: string;
  url?: string;
}