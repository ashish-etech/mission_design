var app = angular.module("missionDesign");
app.controller("dashboardController", function($scope) {

    $scope.details = {
        accountLetters: "IB",
        companyName: "Acme Company",
        offers: [{
            name: "Junior frontend développeur",
            stats: [
                { state: "À traiter", value: "10" },
                { state: "Contactés", value: "62" },
                { state: "Répondus", value: "29" },
                { state: "En process", value: "12" },
                { state: "Recrutés", value: "3" }
            ],
            onClick: function() {
                console.log("abc");
            }
        }, {
            name: "Developer evangelist",
            stats: [
                { state: "À traiter", value: "10" },
                { state: "Contactés", value: "62" },
                { state: "Répondus", value: "29" },
                { state: "En process", value: "12" },
                { state: "Recrutés", value: "3" }
            ],
            onClick: function() {}
        }, {
            name: "Web security hacker",
            stats: [
                { state: "À traiter", value: "10" },
                { state: "Contactés", value: "62" },
                { state: "Répondus", value: "29" },
                { state: "En process", value: "12" },
                { state: "Recrutés", value: "3" }
            ],
            onClick: function() {}
        }, { // only visible in dashboard-page2.png
            name: "Chief happiness officer",
            stats: [
                { state: "À traiter", value: "10" },
                { state: "Contactés", value: "62" },
                { state: "Répondus", value: "29" },
                { state: "En process", value: "12" },
                { state: "Recrutés", value: "3" }
            ],
            onClick: function() {}
        }]
    }


});
