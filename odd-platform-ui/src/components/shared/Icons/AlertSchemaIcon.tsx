import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import AppSvgIcon from './AppSvgIcon';

const AlertSchemaIcon: React.FC<SvgIconProps> = ({ sx, fill, ...props }) => (
  <AppSvgIcon sx={sx} viewBox='0 0 24 24' {...props}>
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 0C0.447715 0 0 0.447716 0 1V9C0 9.55228 0.447716 10 1 10H9C9.55228 10 10 9.55228 10 9V1C10 0.447715 9.55228 0 9 0H1ZM23.7071 23.7071C23.3166 24.0976 22.6834 24.0976 22.2929 23.7071L20 21.4142L17.7071 23.7071C17.3166 24.0976 16.6834 24.0976 16.2929 23.7071C15.9024 23.3166 15.9024 22.6834 16.2929 22.2929L18.5858 20L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L20 18.5858L22.2929 16.2929C22.6834 15.9024 23.3166 15.9024 23.7071 16.2929C24.0976 16.6834 24.0976 17.3166 23.7071 17.7071L21.4142 20L23.7071 22.2929C24.0976 22.6834 24.0976 23.3166 23.7071 23.7071ZM13 5C13 4.44772 13.4477 4 14 4C17.7308 4 20.7799 6.91863 20.9886 10.5972L22.2929 9.29289C22.6834 8.90237 23.3166 8.90237 23.7071 9.29289C24.0976 9.68342 24.0976 10.3166 23.7071 10.7071L20.7071 13.7071C20.3166 14.0976 19.6834 14.0976 19.2929 13.7071L16.2929 10.7071C15.9024 10.3166 15.9024 9.68342 16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289L18.9815 10.5673C18.7622 8.00848 16.6157 6 14 6C13.4477 6 13 5.55228 13 5ZM12 20C12 20.5523 11.5523 21 11 21C7.26921 21 4.2201 18.0814 4.0114 14.4028L2.70711 15.7071C2.31658 16.0976 1.68342 16.0976 1.29289 15.7071C0.902369 15.3166 0.902369 14.6834 1.29289 14.2929L4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L6.01846 14.4327C6.23779 16.9915 8.38434 19 11 19C11.5523 19 12 19.4477 12 20Z'
        fill={fill || '#A8B0BD'}
      />
    </svg>
  </AppSvgIcon>
);

export default AlertSchemaIcon;