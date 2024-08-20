import { Chapter } from "@/types/chapters";
import axios from "axios";

export const fetchAllChapters = async (): Promise<Chapter[]> => {
  const response = await axios.get<Chapter[]>("/api/chapters");
  return response.data;
};
