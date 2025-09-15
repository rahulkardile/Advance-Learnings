import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="login-redirect" exact={true} />
          <stencil-route url="/login" component="login-form" />
          <stencil-route url="/todos" component="todo-list" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
