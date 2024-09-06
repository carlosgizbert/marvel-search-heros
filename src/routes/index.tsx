import { Character } from "@/pages/character";
import { Home } from "@/pages/home";
import { Layout } from "@/ui/components/atoms/layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";

const router = createBrowserRouter([
  {
    id: "root",
    path: Paths.HOME,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: `${Paths.CHARACTER_DETAILS}/:id`,
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
