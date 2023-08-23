export default class JwtService {
  static saveToken(token) {
    localStorage.setItem("token", token);
  }

  static clearToken() {
    localStorage.removeItem("token");
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static saveApplicationId(id) {
    localStorage.setItem("applicationId", id);
  }

  static saveApplicationOwner(id) {
    localStorage.setItem("applicationOwner", id);
  }
  static saveApplicationIsInProduction(id) {
    localStorage.setItem("isInProduction", id);
  }

  static getApplicationOwner() {
    return localStorage.getItem("applicationOwner");
  }

  static getApplicationIsInProduction() {
    return localStorage.getItem("isInProduction");
  }

  static getApplicationId() {
    return localStorage.getItem("applicationId");
  }
}
