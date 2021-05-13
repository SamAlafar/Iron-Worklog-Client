import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true,
    });
  }

  signup = (data) => this.auth.post('/signup', data);
  login = (data) => this.auth.post('/login', data);
  logout = () => this.auth.post('/logout');
  edit = (data) => this.auth.put('/edit', data);
  delete = () => this.auth.delete('/delete');
  loggedin = () => this.auth.get('/loggedin');
}

export default AuthService;
