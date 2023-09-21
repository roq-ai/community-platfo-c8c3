interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Moderator', 'Subscriber', 'Guest'],
  tenantName: 'Company',
  applicationName: 'Community platform',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage content', 'Manage forums'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c703098f-8cc0-4eff-8dc1-5c0ca4cb371f',
};
