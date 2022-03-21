import React from "react";
import { UserAuth } from "context/auth-context";
// import { ProjectListScreen } from "screens/project-list";
// import { TsReactTest } from "try-use-array";
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'
import './App.css'
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFallback } from "components/lib";
function App() {
  const {user}=UserAuth()
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
          {user?<AuthenticatedApp/>:<UnauthenticatedApp/>}
       {/* <AuthenticatedApp/> */}

      </ErrorBoundary>
       
    </div>
  );
}

export default App;
