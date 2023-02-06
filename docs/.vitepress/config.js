export default {
    title: 'Fun Enterprises',
    description: 'A live business catalog',
    base: '/business',

    build: {
        rollupOptions: {
            output:
            {
                format: 'es',
                strict: false,
                entryFileNames: "index.html",
                dir: 'dist/'
            }
         }
      }
}