import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import db from "../db/connect";
import { collection, getDocs, addDoc } from "firebase/firestore";
function Login(props) {
  
  const [users, setUsers]= useState([]);
  const usersCollection = collection(db, "users");
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollection);
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getUsers()
  }, []);
  
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const signIn = () => {
    const data = users.filter(item => item.email === Email && item.password == Password)
    console.log(data)
  if(data.length !== 0){
      localStorage.setItem("auth", true);
      navigate('/home')
    }else{
      window.alert("No user found please SignUp")
    }
  };
  const signUp = async() => {
    const data = users.filter(item => item.email === Email && item.password == Password);
    if(data.length > 0){
      window.alert("Please SignIn user already exists");
      return null
    }
    await addDoc(usersCollection, {email: Email, password:Password}).then(res => {
      console.log(res)
    })
  };

  return (
    <div class="min-h-full flex">
      <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              class="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-green-400.svg"
              alt="Workflow"
            /> 
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div class="mt-8">
            <div class="mt-6">
              <div class="space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      value={Email}
                      onChange={EmailHandler}
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      value={Password}
                      onChange={PasswordHandler}
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>

                    <div class="text-sm">
                        <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                        {" "}
                        Forgot your password?{" "}
                        </a>
                    </div>
                </div>
                <div>
                  <div className="my-2">
                    <button
                      onClick={signIn}
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={signUp}
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img
          class="absolute inset-0 h-screen w-full "
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
