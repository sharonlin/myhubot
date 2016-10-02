module.exports = function(robot) {
    process.env.HUBOT_REST_SEND_URL = 'http://localhost:8080';
    process.HUBOT_SLACK_TOKEN='xoxb-85816617941-zAwxYEdAKsu5DQqyx1LzshRC';
    robot.respond(/is it (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        console.log("Debug message");
        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

    robot.respond(/top (\d+) failed tests/i, function(res){
        numberOfTests = res.match[1]
        var tests = JSON.stringify([{title:'top ' + res.match[1] + ' failed tests'},{name:'t1', failed:20},{name:'t2', failed:18},{name:'t3', failed:12}, {name:'t1', failed:15}]);    
        res.reply(tests); 
    });
}