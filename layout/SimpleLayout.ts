import { createGlobalStyle, css } from 'styled-components';
import GlobalStyle from '@paljs/ui/GlobalStyle';
import { breakpointDown } from '@paljs/ui/breakpoints';

const SimpleLayout = createGlobalStyle`
${({ theme }) => css`
  ${GlobalStyle}
  html {
    font-size: 16px;
  }
  .column.small {
    flex: 0.15 !important;
  }
  .menu-item a {
    color: white !important;
  }
  .react-calendar__tile--now{
    background: linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%);
    border-radius:50%;
  }
  .css-pdct74-MuiTablePagination-selectLabel,.css-levciy-MuiTablePagination-displayedRows{
    margin:0 !important;
  }
  .nav-link {
    color: white;
  }
  .menu-item {
    border-bottom: none !important;
  }
  .nav-tabs .nav-link:hover{
    color:white !important;    
    background:linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%);
  }

  .auth-layout {
    .main-content {
      padding: 2.5rem;
      ${breakpointDown('sm')`
        padding: 0;
      `}
    }
  }
  .btn-close{
    background-color: white !important;
    opacity:1 !important;
    border-radius: 50% !important;
    font-size: 9px;
    padding: 6px;
}
.dropdown-item:hover{
  background-image: url("/images/header_bg.png");
  background-size:contain;    
}
.dropdown-item:hover button{
  color: white !important;
}
  aside.settings-sidebar {
    transition: transform 0.3s ease;
    width: 19rem;
    overflow: hidden;
    transform: translateX(${theme.dir === 'rtl' && '-'}100%);
    &.start {
      transform: translateX(${theme.dir === 'ltr' && '-'}100%);
    }

    &.expanded,
    &.expanded.start {
      transform: translateX(0);
    }

    .scrollable {
      width: 19rem;
      padding: 3.4rem 0.25rem;
    }

    .main-container {
      width: 19rem;
      transition: width 0.3s ease;
      overflow: hidden;

      .scrollable {
        width: 19rem;
      }
    }
  }

  ${breakpointDown('xs')`
    .main-content {
        padding: 0.75rem !important;
      }
  `}

  .with-margin {
    margin: 0 0.75rem 2rem 0;
  }
  .inline-block {
    display: inline-block;
  }
  .popover-card {
    margin-bottom: 0;
    width: 300px;
    box-shadow: none;
  }
  .btn {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 500;
    border: 2px solid transparent;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .ck-content {
    min-height: 20rem;
  }
`}
`;
export default SimpleLayout;
