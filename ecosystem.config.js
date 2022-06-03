module.exports = {
    apps: [
        {
            name: 'nodejs-sequelize-pm2',
            script: './src/app.js',
            instances: 0, 
            exec_mode: 'cluster',
            merge_logs: true, 
            autorestart: true, 
            watch: false
        },
    ]
};