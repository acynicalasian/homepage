import FBLogin from "./fblogin";

export default function Genie({ status, } : { status: string }) {


  if (status === "connected") {
    return (
      // placeholder.
      <>
        Logged in.
        <FBLogin/>
      </>
    );
  } else if (status === "not_authorized" || status === "unknown") {
    return (
      <FBLogin/>
    );
  }
  else return <>Error! Not rerendering!</>;
}