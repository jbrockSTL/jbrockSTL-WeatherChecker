import { ApixuService } from "./apixu.service";

import { get } from "http";

//Checks if local call is running

let service: ApixuService;

it("check Service is running", () => {
  expect(ApixuService);
});

//Checks to see if call has the API URL

it("check API URL", () => {
  expect(get).toContain(service);
});
