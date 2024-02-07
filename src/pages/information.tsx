// Import React and Next.js modules
import React from "react";

// Component function
const JwtInfoPage: React.FC = () => {
  return (
    <div className="bg-black">
      <h1>Understanding JSON Web Tokens (JWTs)</h1>
      <p>
        JSON Web Tokens (JWTs) serve as an open standard (RFC-7519) for securely
        transmitting information between two parties. Think of them as digital
        keys, unlocking access to resources. JWTs find common use in
        authentication and authorization processes.
      </p>

      <h2>How JWTs Operate</h2>
      <p>A JWT consists of three components:</p>
      <ul>
        <li>
          <strong>Header:</strong> Contains token details like type and signing
          algorithm.
        </li>
        <li>
          <strong>Payload:</strong> Holds claims – information being transmitted
          (e.g., user&apos;s name, email, and role).
        </li>
        <li>
          <strong>Signature:</strong> A cryptographic hash of the header and
          payload, signed with the issuer&apos;s secret key.
        </li>
      </ul>
      <p>
        To verify a JWT, the recipient uses the issuer&apos;s public key. A
        valid signature assures the token&apos;s integrity and authenticates the
        claims.
      </p>

      <h2>Common Uses of JWTs</h2>
      <p>JWTs find application in various scenarios, including:</p>
      <ul>
        <li>
          <strong>Web applications:</strong> Authenticating and authorizing
          users.
        </li>
        <li>
          <strong>APIs:</strong> User authentication and authorization for APIs.
        </li>
        <li>
          <strong>Microservices:</strong> Authentication and authorization
          between microservices.
        </li>
        <li>
          <strong>Single sign-on (SSO):</strong> Implementing SSO for users
          across multiple applications.
        </li>
      </ul>

      <h2>Advantages of JWTs</h2>
      <p>Embracing JWTs offers numerous benefits such as:</p>
      <ul>
        <li>
          <strong>Security:</strong> JWTs are signed, enhancing application
          security.
        </li>
        <li>
          <strong>Flexibility:</strong> Transmit various information like user
          identity, roles, and permissions.
        </li>
        <li>
          <strong>Performance:</strong> Lightweight and efficient, enhancing
          overall application performance.
        </li>
      </ul>

      <h2>Example of JWT Usage</h2>
      <p>
        Consider developing a web application using JWTs for user authentication
        and authorization:
      </p>
      <ol>
        <li>
          Upon user login, generate a JWT token and send it back to the user.
        </li>
        <li>User stores the JWT token in their browser.</li>
        <li>
          Subsequent requests include the JWT token in the HTTP Authorization
          header.
        </li>
        <li>
          Verify the JWT token to authenticate and authorize user access to
          requested resources.
        </li>
      </ol>
    </div>
  );
};

export default JwtInfoPage;
