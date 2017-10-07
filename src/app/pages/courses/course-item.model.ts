export interface CourseItem {
  id: number;
  link?: string;
  author?: string;
  name: string;
  duration: number;
  date: Date;
  description: string;
  hide?: boolean;
}
