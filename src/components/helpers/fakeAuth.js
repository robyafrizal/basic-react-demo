export const fakeAuth = {
  isAuthenticated: true,
  user: '',
  authenticate(name, cb) {
    fakeAuth.isAuthenticated = true;
    fakeAuth.user = name;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
