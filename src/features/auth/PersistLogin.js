import { useEffect, useState } from "react";
import { useRefreshMutation } from "./authApiSlice";
import { Outlet } from "react-router-dom";
import { setUserId } from "./reduxContext";
import { useDispatch } from "react-redux";
/* import usePersistLogin from "../../hooks/usePersistLogin"; */

const PersistLogin = () => {

  const [refresh ] = useRefreshMutation()
/* const token = useSelector(selectUser)
    const [persist , setPersist] = usePersistLogin() */
  const [resfreshTrue , setRefreshTrue] = useState(false)
  const dispatch = useDispatch()

  useEffect( ()=>{
    const doRefresh = async()=>{
      const response = await refresh()
      dispatch(setUserId({userId:response?.data?.userId}))
      setRefreshTrue(true) // this helps protecting route with delay
    }

      doRefresh()
 },[refresh , dispatch])

let content
if (resfreshTrue) {// this helps protecting route with delay
  content = <Outlet/>

}

  return content
}

export default PersistLogin