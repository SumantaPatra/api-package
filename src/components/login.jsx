import { Button, Checkbox, InputFields } from "@zopsmart/zs-components";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

export default function Login(){
    const [state, setState] = useState({
        phone: "",
        password: "",
        remember: false,
      });
      const [ec,setEc] = useState("");
      const [validEmail, setValidEmail] = useState(true)
      const [validPassword, setValidPassword] = useState(true)
      const navigate = useNavigate();
      const validateEmail = (value) => {
        // Regular expression for email validation
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isValid = value.length >=10
        setValidEmail(isValid)
      }
      const validatePassword = (value) => {
        const isValid = value.length >= 8
        setValidPassword(isValid)
      }
    
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("submitting")
        try {
         const data =  await ec?.authFeature?.login({username:state.phone,password:state.password,remember:state.remember})
          if(data?.status === "SUCCESS"){
            navigate("/product")
            navigate('/mycard')
          }else{
             alert("wrong credentials")
          }
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        async function check() {
          const ecObj = await window.ec;
          setEc(ecObj);
        }
      
        check()
      },[])
    
     
    
      return (
        <div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
            <div style={{flex:1,maxWidth:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.2.2067250300.1683876831&semt=ais" alt="" style={{maxWidth:"100%",height:"auto"}} />
            </div>
          <div
            style={{
              flex: 1,
              maxWidth: "50%",
              display: "flex",
              "justify-content": "center",
              alignItems: "center",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: "35rem",
              }}
              onSubmit={handleSubmit}
            >
              <div style={{ width: "100%" }}>
                <div style={{ padding: "0.5rem" }}>
                  <InputFields
                    onChange={(e) => {
                      setState({
                        ...state,
                        phone: e.target.value,
                      });
                      validateEmail(e.target.value)
                    }}
                    label="Mobile"
                    value={state.phone}
                    isError={!validEmail}
                    message={!validEmail && 'invalid phone'}
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div style={{ padding: "0.5rem" }}>
                  <InputFields
                    onChange={(e) => {
                      setState({
                        ...state,
                        password: e.target.value,
                      });
                      validatePassword(e.target.value)
                    }}
                    label="Password"
                    value={state.password}
                    isError={!validPassword}
                    message={!validPassword && 'required minimum 8!'}
                    placeholder="Enter Password"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem",
                  }}
                >
                  <Checkbox
                    onClick={() => {
                      setState({
                        ...state,
                        remember: !state.remember,
                      });
                    }}
                    label="Remember me"
                    checked={state.remember}
                  />
                </div>
                <div style={{ padding: "0.4rem" }}>
                  <Button text="Log in" disabled={
                  !state.phone ||
                  !validEmail ||
                  !state.password ||
                  !validPassword
                }
                 />
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}