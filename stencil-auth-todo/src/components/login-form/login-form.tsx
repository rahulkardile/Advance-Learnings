import { Component, h, State } from '@stencil/core';
import { AuthService } from '../services/auth-service';

@Component({
  tag: 'login-form',
  styleUrl: 'login-form.css',
})
export class LoginForm {
  @State() username = '';
  @State() password = '';
  @State() error = '';

  async handleLogin() {
    try {
      await AuthService.login(this.username, this.password);
      window.location.href = '/todos';
    } catch (e) {
      this.error = e.message;
    }
  }

  render() {
    return (
      <div class="login-container">
        <h2>Login</h2>
        {this.error && <p class="error">{this.error}</p>}
        <input
          placeholder="Username"
          value={this.username}
          onInput={e => this.username = (e.target as HTMLInputElement).value}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.password}
          onInput={e => this.password = (e.target as HTMLInputElement).value}
        />
        <button onClick={() => this.handleLogin()}>Login</button>
      </div>
    );
  }
}
