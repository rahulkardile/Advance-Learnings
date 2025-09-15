import { Component, h } from '@stencil/core';

@Component({ tag: 'login-redirect' })
export class LoginRedirect {
  componentWillLoad() {
    window.location.href = '/login';
  }

  render() {
    return <div>Redirecting to login...</div>;
  }
}
