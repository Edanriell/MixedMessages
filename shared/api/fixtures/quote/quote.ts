import type { AxiosPromise } from "axios";

import { apiInstance } from "./base";
import type { Quote } from "./model";

const BASE_URL = "/v1/quotes?category";

export const getRandomQuote = (): AxiosPromise<Array<Quote>> => {
	return apiInstance.get(BASE_URL);
};
