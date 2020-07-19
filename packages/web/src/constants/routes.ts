export const routes = {
  home: '/',
  profileShow: '/user/:id',
} as const;

export const urlBuilderFromRoutes: Record<keyof typeof routes, (...args: any[]) => string> = {
  home: () => '/',
  profileShow: (userId: string) => `/user/${userId}`,
};
