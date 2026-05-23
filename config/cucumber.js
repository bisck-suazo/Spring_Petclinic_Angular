module.exports = {

    default: {

        paths: [
            "src/test/features/*.feature"
        ],

        require: [
            "src/test/steps/*.js"
        ],

        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"
        ]
    }
}