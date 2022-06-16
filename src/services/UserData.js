
class UserData {

  constructor() {
    this.userdata = "";
    this.selectedOptioId = "";
  }

  setUserData(userData) {
    this.userData = userData;
  }

  getUserData() {
    return this.userData;
  }

  setSelectedOptioId(id) {
    this.selectedOptioId = id;
  }

  getSelectedOptioId() {
    return this.selectedOptioId;
  }
}

export default new UserData();
