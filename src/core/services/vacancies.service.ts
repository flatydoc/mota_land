import { endpoints } from "../configs/endpoints";
import { fetchData } from "../utils/fetchData";

export const getAllVacancies = () => fetchData(`${endpoints.vacancies}`);

export const getVacancyById = (id: number) =>
  fetchData(`${endpoints.vacancies}/${id}`);
