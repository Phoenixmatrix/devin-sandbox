import React from 'react';

export function MockWelcome({ message }: { message: string }) {
  return (
    <main>
      <div>
        <header>
          <div>
            {/* Mock image instead of SVG import */}
            <div data-testid="react-router-logo-light" aria-label="React Router"></div>
            <div data-testid="react-router-logo-dark" aria-label="React Router"></div>
          </div>
        </header>
        <div>
          <nav>
            <p>What&apos;s next?</p>
            <ul>
              <li>
                <a href="https://reactrouter.com/docs">React Router Docs</a>
              </li>
              <li>
                <a href="https://rmx.as/discord">Join Discord</a>
              </li>
              <li>{message}</li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
