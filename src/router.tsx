import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const viteBase = import.meta.env.BASE_URL;
const routerBasepath = viteBase === "/" ? undefined : viteBase.replace(/\/$/, "");

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    ...(routerBasepath ? { basepath: routerBasepath } : {}),
  });

  return router;
};
