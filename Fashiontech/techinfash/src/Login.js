import SideNav from "./SideProfile/SideNav/SideNav";
import Timeline from "./MainPage/Timeline/Timeline";
import "./Login.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
// import {UserButton} from "@clerk/clerk-react";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  // eslint-disable-next-line no-throw-literal
  throw "Missing Publishable Key";
}

function SignIn() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        {/* <Welcome /> */}
        {/* <MainApp /> */}
        {/* <UserButton /> */}
        <div className="App">
          <div className="side">
            <SideNav />
          </div>
          <div className="main">
            <Timeline />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

// function Welcome() {
//   return <div>Hello you are signed in</div>;
// }

// function MainApp() {
//   return (<>
//     <div className="App">
//           <div className="side">
//             <SideNav />
//           </div>
//         <div className="main">
//           <Timeline />
//         </div>
//     </div>
//   </>);
// }
export default SignIn;
