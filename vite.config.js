import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'three', // Add 'three' to the list of external modules
        '@react-three/drei',
      ],
    },
  },
};
