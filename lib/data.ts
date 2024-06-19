import axios from "axios";
import { Car } from "./utils";

export async function fetchCar(mispar_rechev: string): Promise<Car> {
  try {
    const carDetails = axios.post(
      "https://data.gov.il/api/3/action/datastore_search",
      {
        resource_id: "053cea08-09bc-40ec-8f7a-156f0677aff3",
        q: "",
        filters: {
          mispar_rechev: mispar_rechev,
        },
        limit: 100,
        offset: 0,
        sort: "mispar_rechev asc",
      }
    );

    const tavNeche = axios.get(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=${mispar_rechev}`
    );

    const [response, response2] = await Promise.all([carDetails, tavNeche]);
    const car: Car = response.data.result.records[0];
    return {
      ...car,
      tag_neche: response2.data.result.records,
    } as Car;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.error?.message || "Failed to fetch car data"
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
