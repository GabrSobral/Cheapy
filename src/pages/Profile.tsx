import { NextPage } from "next"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ProfileContent } from "../content/ProfileContent";
import { getToken } from "../utils/JsonWebToken";

const Profile: NextPage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    if(!getToken())
      replace("/");
  },[replace])
  
  return <ProfileContent/>
}
export default Profile;