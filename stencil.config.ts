import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'fw-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets' },
        { src: '../node_modules/datatables.net-dt/css/jquery.dataTables.css',dest: 'assets/css/dataTables.css' },
        { src: '../node_modules/daterangepicker/daterangepicker.css',dest: 'assets/css/daterangepicker.css' },
      ]
    }
  ],
  plugins: [sass()],
  globalStyle: 'src/global/variables.css'
};
