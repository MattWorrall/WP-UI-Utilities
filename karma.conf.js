module.exports = (config) => {
    config.set({
        frameworks: ['mocha', 'karma-typescript'],
        files: [{
            pattern: 'src/**/*.ts'
        }, {
            pattern: 'tests/**/*ts'
        }],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        karmaTypescriptConfig: {
            include: ['src/**/*.ts'],
            tsconfig: './tsconfig.json'
        },
        reporters: [
            'progress',
            'karma-typescript'
        ],
        browsers: [
            'ChromeDebugging'
        ],
        singleRun: false,
        customLaunchers: {
            ChromeDebugging: {
                base: 'Chrome',
                flags: ['--remote-debugging-port=9333']
            }
        }
    })
};