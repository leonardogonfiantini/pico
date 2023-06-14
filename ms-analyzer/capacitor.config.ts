import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.msanalyzer.app',
  appName: 'ms-analyzer',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  
};

export default config;
