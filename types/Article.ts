export interface Article {
  id: string;
  title: string;
  preview: string;
  description: string;
  image: string;
  createdAt: string;
}

export function isArticle(obj: unknown): obj is Article {
  if (typeof obj !== "object" || obj === null) return false;

  const a = obj as Record<string, unknown>;

  return (
    typeof a.id === "string" &&
    typeof a.title === "string" &&
    typeof a.preview === "string" &&
    typeof a.description === "string" &&
    typeof a.image === "string" &&
    typeof a.createdAt === "string"
  );
}

export function isArticleArray(arr: unknown): arr is Article[] {
  return Array.isArray(arr) && arr.every(isArticle);
}
