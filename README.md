
# @precooked/react-auth-context

![Precooked Logo](https://precookedcode.com/assets/logos/logo-horizontal-dark.svg)

A React context provider for managing user authentication state, including token and user information.

## Installation

```bash
npm install @precooked/react-auth-context
```

## Usage

### AuthProvider

Wrap your application with the `AuthProvider` to provide authentication context:

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "@precooked/react-auth-context";

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById("root")
);
```

### useAuth Hook

Use the `useAuth` hook to access and manage authentication state:

```tsx
import React from "react";
import { useAuth } from "@precooked/react-auth-context";

const UserProfile = () => {
    const { user, setUser, token, setToken, deleteToken, deleteUser } = useAuth();

    const login = () => {
        setToken("exampleToken");
        setUser({ name: "John Doe", email: "john.doe@example.com" });
    };

    const logout = () => {
        deleteToken();
        deleteUser();
    };

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.name}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    );
};
```

## API

### AuthProvider

A context provider for authentication state.

**Props:**
| Prop     | Type        | Description                 |
|----------|-------------|-----------------------------|
| children | `ReactNode` | The content to render inside the provider. |

### useAuth

A hook to access authentication context.

**Returned Values:**
| Key         | Type          | Description |
|-------------|---------------|-------------|
| token       | `string \| null` | The current authentication token. |
| user        | `any \| null`    | The current authenticated user. |
| setToken    | `(token: string) => void` | Function to set the authentication token. |
| getToken    | `() => string \| null` | Function to get the authentication token. |
| deleteToken | `() => void` | Function to remove the authentication token. |
| setUser     | `(user: any) => void` | Function to set the authenticated user. |
| getUser     | `() => any \| null` | Function to get the authenticated user. |
| deleteUser  | `() => void` | Function to remove the authenticated user. |

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
