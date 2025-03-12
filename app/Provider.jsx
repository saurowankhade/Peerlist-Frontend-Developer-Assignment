"use client"; // Needed for Next.js 13+

import { Provider } from "react-redux";
import { store } from '../app/src/redux/store';

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
