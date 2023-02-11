import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Total Bet(Risk Managaement)',
    icon: { name: 'bar-chart-outline' },
    children: [
      {
        title: 'Member Total',
        icon: { name: 'person-outline' },
        link: { href: '/total-bet/member-total' },
      },
      {
        title: 'Simple FT HDP & OU',
        icon: { name: 'cloud-upload-outline' },
        link: { href: '/total-bet/simple-ft-hdp-&-ou' },
      },
      {
        title: 'Simple HDP & OU',
        icon: { name: 'cloud-download-outline' },
        link: { href: '/total-bet/simple-hdp-&-ou' },
      },
      
      {
        title: 'Simple HT HDP & OU',
        icon: { name: 'settings-2' },
        link: { href: '/total-bet/simple-ht-hdp-&-ou' },
      },
      {
        title: 'Simple HT OE',
        icon: { name: 'monitor-outline' },
        link: { href: '/total-bet/simple-ht-oe' },
      },
      {
        title: 'Simple FT OE',
        icon: { name: 'cloud-upload' },
        link: { href: '/total-bet/simple-ft-oe' },
      },
      {
        title: '1X2',
        icon: { name: 'layers' },
        link: { href: '/total-bet/1x2' },
      },
      {
        title: 'Double Chance',
        icon: { name: 'bookmark' },
        link: { href: '/total-bet/double-chance' },
      },
      {
        title: 'Money Line',
        icon: { name: 'list-outline' },
        link: { href: '/total-bet/money-line' },
      },
      {
        title: 'Total Gold',
        icon: { name: 'settings' },
        link: { href: '/total-bet/total-gold' },
      },
      {
        title: 'HT/FT',
        icon: { name: 'shopping-bag' },
        link: { href: '/total-bet/ht-ft' },
      },
      {
        title: 'FG/LG',
        icon: { name: 'layout' },
        link: { href: '/total-bet/fg-lg' },
      },
      {
        title: 'Asian LX2',
        icon: { name: 'edit' },
        link: { href: '/total-bet/asian-lx2' },
      },
    ],
  },
  {
    title: 'Sale Team Management',
    icon: { name: 'people' },
    children: [
      {
        title: 'Create Sub Account',
        icon: { name: 'people' },
        link: { href: '/ezbets68/sale-team-management/agent-group/create-agent' },
      },
      {
        title: 'Agent Group',
        icon: { name: 'people' },
        link: { href: '/ezbets68/sale-team-management/agent-group/' },
      },
      {
        title: 'Agent Report',
        icon: { name: 'people' },
        link: { href: '/ezbets68/sale-team-management/agent-report' },
      },
      
      // {
      //   title: 'Agent Report',
      //   icon: { name: 'bar-chart-2' },
      //   link: { href: '/ezbets68/sale-team-management/agent-group/agent-information' },
      // },
      {
        title: 'Sale Team Commission Report',
        icon: { name: 'peoples' },
        link: { href: '/ezbets68/sale-team-management/sale-team-commission-report' },
      },
      {
        title: 'Player List',
        icon: { name: 'menu' },
        link: { href: '/ezbets68/sale-team-management/player-list' },
      },
        {
        title: 'Player Report',
        icon: { name: 'clipboard-outline' },
        link: { href: '/ezbets68/sale-team-management/player-report' },
      },
      // {
      //   title: 'Member Information',
      //   icon: { name: 'menu' },
      //   link: { href: '/ezbets68/sale-team-management/member-info' },
      // },
    
      {
        title: 'Betting History',
        icon: { name: 'menu-arrow-outline' },
        link: { href: '/ezbets68/sale-team-management/betting-history' },
      },
      {
        title: 'All Transaction Logs',
        icon: { name: 'credit-card-outline' },
        link: { href: '/ezbets68/sale-team-management/all-transaction-logs' },
      },
    ],
  },
  {
    title: 'Member Management',
    icon: { name: 'bar-chart-outline' },
    children: [
      {
        title: 'New SH',
        icon: { name: 'person-outline' },
        link: { href: '/ezbets68/member-management/create' },
      },
      {
        title: 'New SH',
        icon: { name: 'person-outline' },
        link: { href: '/ezbets68//member-management/newSH' },
      },
      {
        title: 'New SSMA',
        icon: { name: 'cloud-upload-outline' },
        link: { href: '/ezbets68/member-management/newSSMA' },
      },
      {
        title: 'Account List',
        icon: { name: 'settings-2' },
        link: { href: '/ezbets68/member-management/accountList' },
      },
      
      {
        title: 'Credit Bet Setting',
        icon: { name: 'monitor-outline' },
        link: { href: '/ezbets68/member-management/creditBetSetting' },
      },
      {
        title: 'Commission',
        icon: { name: 'cloud-upload' },
        link: { href: '/ezbets68/member-management/commision' },
      },
      {
        title: 'Credit',
        icon: { name: 'layers' },
        link: { href: '/ezbets68/member-management/credit' },
      },
      {
        title: 'Preset PT',
        icon: { name: 'bookmark' },
        link: { href: '/ezbets68/member-management/presetPT' },
      },
      {
        title: 'Effective PT',
        icon: { name: 'list-outline' },
        link: { href: '/ezbets68/member-management/effectivePT' },
      },
      {
        title: 'Credit & Balance',
        icon: { name: 'settings' },
        link: { href: '/ezbets68/member-management/creditAndBalance' },
      },
      {
        title: 'Update League Bet Setting',
        icon: { name: 'shopping-bag' },
        link: { href: '/ezbets68/member-management/updateLeagueBetSetting' },
      },
      {
        title: 'Update League Group Bet Setting',
        icon: { name: 'shopping-bag' },
        link: { href: '/extra-components/updateLeagueGroupBetSetting' },
      },
      {
        title: 'Third Party Game Bet Settings',
        icon: { name: 'shopping-bag' },
        link: { href: '/extra-components/thirdPartyGameBetSettings' },
      },
      // {
      //   title: 'Create Member/Player',
      //   icon: { name: 'person-outline' },
      //   link: { href: '/ezbets68/member-management/create' },
      // },
     
    ],
  },
  // {
  //   title: 'Report',
  //   icon: { name: 'edit-2-outline' },
  //   children: [
  //     {
  //       title: 'Win Lose',
  //       link: { href: '/forms/inputs' },
  //     },
  //     {
  //       title: 'Win Lose By Player',
  //       link: { href: '/forms/form-Win Lose By Player' },
  //     },
  //     {
  //       title: 'Win Lose Chart Report',
  //       link: { href: '/forms/buttons' },
  //     },
  //     {
  //       title: 'Winlose Simple',
  //       link: { href: '/forms/select' },
  //     },
  //     {
  //       title: 'Cancelled Bet List',
  //       link: { href: '/forms/buttons' },
  //     },
  //     {
  //       title: 'Match Result',
  //       link: { href: '/forms/select' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Transfer',
  //   icon: { name: 'keypad-outline' },
  //   children: [
  //     {
  //       title: 'Full Transfer ',
  //       link: { href: '/ui-features/grid' },
  //     },
  //   ],
  // },
  {
    title: 'Wallet',
    icon: { name: 'browser-outline' },
    children: [
     
      {
        title: 'Wallet Accounts',
        icon: { name: 'person-outline' },
        link: { href: '/ezbets68/account' },
      },
      {
        title: 'Deposit',
        icon: { name: 'layers' },
        link: { href: '/ezbets68/account/deposit' },
      },
      {
        title: 'Withdraw',
        icon: { name: 'layers' },
        link: { href: '/ezbets68/account/withdraw' },
      },
      {
        title: 'Transfer',
        icon: { name: 'layers' },
        link: { href: '/ezbets68/account/transfer' },
      },
     
    ],
  },
  {
    title: 'Security',
    icon: { name: 'text-outline' },
    children: [
      {
        title: 'Change password',
        link: { href: '/editors/tinymce' },
      },
      {
        title: 'Change Login Name',
        link: { href: '/editors/ckeditor' },
      },
      {
        title: 'Change Pin Code',
        link: { href: '/ezbets68/security/pin' },
      },
    ],
  },
  {
    title: 'Sub Account',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: 'Create Sub Account',
        link: { href: '/miscellaneous/404' },
      },
      {
        title: 'Sub Account List',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Transaction',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Balance History ',
        link: { href: '/auth/login' },
      },
    ],
  },
  {
    title: 'Game & Provider',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Game list',
        link: { href: '/auth/login' },
      },
    ],
  },
  {
    title: 'Resource',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: 'Manage',
        link: { href: '/miscellaneous/404' },
      },
      {
        title: 'Manage Simple',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Web admin',
    icon: { name: 'bookmark-outline' },
    children: [
      {
        title: 'Customize Themes',
        link: { href: '/web-admin/404' },
      },
      {
        title: 'Admin Control',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Company',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: 'Currency',
        link: { href: '/company/currency' },
      },
      {
        title: 'Language',
        link: { href: '/company/language' },
      },
    ],
  },
  {
    title: 'Monitor',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: 'Running Order',
        link: { href: '/monitor/running-order' },
      },
      {
        title: 'ForeCast',
        link: { href: '/monitor/forecast' },
      },
      {
        title: 'Last 50 Page',
        link: { href: '/monitor/last-50-pages' },
      },
      {
        title: 'Online Player List',
        link: { href: '/monitor/online-player-list' },
      },
    ],
  },
];

export default items;
