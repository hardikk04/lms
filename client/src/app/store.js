import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer.js";
import { authApi } from "@/features/auth/authApi.js";

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(authApi.middleware);
  },
});

export default store;
