// for jest
// import "@testing-library/react/cleanup-after-each";
// import "@testing-library/jest-dom/extend-expect";

import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(cleanup);
