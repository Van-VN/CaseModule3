
const UserModel = require('../../models/userModel/userModel')
class UserController {
constructor() {
    this.userModel =  UserModel
}

async showAllActor(){
    let info = await this.userModel.showUser()
    console.log(info)
}
async findById(id){
    let info = await this.userModel.findByName(id)
    return info
}

}

module.exports = new UserController()