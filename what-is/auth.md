# Auth

The word `Auth` can be represented in two ways, Authorization, the process in which a server determines whether a client has permission to access a resource, or Authentication, the process of verifying a user, confirming who they are.

## Authentication

Usually, authentication happens before authorization. After proving who you are, usually through login details such as a Username and Password, it then comes down to what you are and whether if you have permission to access a resource.

Currently, some of the common terms heard are: 2FA, MFA, SSO, OTP

1. 2FA: Two-Factor Authentication
  1. Adds a second layer of protection, requiring two of three categories:
    1. Something you know (username / password)
    1. Something you have (phone / card / token)
     1. Something you are (biometrics credentials)
1. MFA: Multi-Factor Authentication
  1. Similar to 2FA concept except it may require two or MORE factors of authentication
1. SSO: Single-sign on
  1. Enables users to access multiple services using a single ID. Through SAML or OpenID Connect
1. OTP: One-time password
  1. Auto-generated password valid for one login session, often used for MFA. Sent via text or email.

### Authentication Types

#### Basic Authentication:

Requiring a username and password to be encoded in base64, that is sent to the server. The server then decodes it and uses the credentials to perform an operation.

#### OAuth (Open Authorization)

1. **Delegated access**: Users can authorize applications to perform **certain** actions on their behalf without sharing credentials.
    1. Access granted is based on tokens, avoiding the need for a username and password.
1. **Scoped and Permissions access**: 
1. **Token-based Authentication**: 
1. **Signed tokens**: All OAuth 1.0 tokens are signed, requiring both the client and server to maintain a shared secret to generate signatures. However, this is mostly removed in OAuth 2.0 to reduce the complexity of maintaining the mandatory signing of tokens to make it easier for development.
    1. All Resource and Authorization servers are mostly integrated with one another to perform token validation due to its stateful-ness.

#### OAuth 2.0

Mostly follows OAuth 1.0's **Delegated Authorization**, **Scoped and Permissions access** and **Token-based Authentication** except:

1. Higher focus on **Delegated access**: Resource Server does not require to validate signatures
1. Stateless: 
    1. More flexible: As not all tokens require to be signed, more secure tokens such as JWT can be used only when needed.
    1. More Scalable as it is stateless: Tokens can be passed to an _Authorization server_ to be validated as there is no state involved in the process.
1. **Less Secure**: OAuth 2.0 highly depends on the connection between clients to be HTTPS to prevent tokens from being stolen due to interception. 

#### Bearer Tokens

This is a token, where a holder is able to access a certain resource on the server without the need to provide additional details.

1. The authenticity of the token is validated against an authorization server and 
1. **Format**:
    1. **JWT Token**:
        1. Self-contained tokens that can include claims of the user for authorization purposes.
        1. Is-signed. Does not require an invocation to the authorization server to perform validation.
    1. **Opaque**:
        1. Random strings that do not contain any information and must be checked with an authorization server to be validated.
        1. Do not provide context about the user or session.
1. **Expiration**:
    1. These tokens should have an expiration to protect the bearer during transmission if the token is stolen.
    1. Refresh tokens may also be included to obtain a new access token.

## Authorization

Authorization is the process of determining whether a user/application has the permission to access a certain resource or perform a specific action. This happens after Authentication.

1. **Roles & Permissions**: Users are typically assigned a role that has permissions or policies that tells the server whether a user is able to perform an action. Role-based access control (RBAC) helps group users to simplify management of users in a system.
1. **Scope**: Scopes define a level of access that is granted to a user/application. E.g. READ-ONLY to a specific resource
