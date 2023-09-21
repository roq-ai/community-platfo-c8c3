const mapping: Record<string, string> = {
  companies: 'company',
  contents: 'content',
  discussions: 'discussion',
  forums: 'forum',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
