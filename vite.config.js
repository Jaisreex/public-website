import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),

                laundromat_v2: resolve(__dirname, 'laundromat-v2.html'),
                upi_payments: resolve(__dirname, 'upi-payments.html'),
                robotics: resolve(__dirname, 'robotics.html'),

                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
});
