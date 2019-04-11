var AV = require('leancloud-storage');
var APP_ID = 'Cq846eABT06Jse8YwqavT0Aj-gzGzoHsz';
var APP_KEY = 'P7GhyCurG4aX3b3Q5iaISRAg';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

export default AV

export function signUp(username, password, successFn, errorFn) {
    // 新建 AVUser 对象实例
    var user = new AV.User();
    // 设置用户名
    user.setUsername(username);
    // 设置密码
    user.setPassword(password);

    user.signUp().then(function (loggedInUser) {
        console.log('loggedInUser')
        console.log(loggedInUser)
        let user = getUserFromAVUser(loggedInUser)
        successFn.call(null, user)
    }, function (error) {
        errorFn.call(null, error)
    });


    return undefined
}


function getUserFromAVUser(AVUser) {
    console.log('AVUser')
    console.log(AVUser)
    return {
        id: AVUser.id,
        ...AVUser.attributes
    }
}
