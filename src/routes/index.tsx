import { Character } from "@/pages/character";
import { Home } from "@/pages/home";
import { Layout } from "@/ui/components/atoms/layout";
import {
  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "personagem",
        Component: Character,
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Carregando...</p>} />
  );
}
