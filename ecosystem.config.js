module.exports = {
    apps: [
        {
            name: 'nodejs-sequelize-pm2',
            script: './src/app.js',
            instances: 3, 
            exec_mode: 'cluster',
            merge_logs: true, 
            autorestart: true, 
            watch: false, 
            env: {
                NODE_ENV: 'development',
            },
        },
    ]
};