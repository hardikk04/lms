import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/auth/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;

    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;

    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerData && registerIsSuccess) {
      toast.success(registerData.message || "Signup Successful");
      navigate("/");
    }
    if (loginData && loginIsSuccess) {
      toast.success(loginData.message || "Login Successful");
      navigate("/");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Signup Failed");
    }
    if (loginError) {
      toast.error(loginError.data.message || "Login Failed");
    }
  }, [
    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Email</Label>
                  <Input
                    id="tabs-demo-name"
                    type="email"
                    name="email"
                    value={loginInput.email}
                    placeholder="eg. hardik@gmail.com"
                    required={true}
                    onChange={(e) => {
                      changeInputHandler(e, "login");
                    }}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Password</Label>
                  <Input
                    id="tabs-demo-username"
                    type="password"
                    name="password"
                    value={loginInput.password}
                    required={true}
                    placeholder="eg. hardik123"
                    onChange={(e) => {
                      changeInputHandler(e, "login");
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  disabled={loginIsLoading}
                  onClick={() => {
                    handleRegistration("login");
                  }}
                >
                  {loginIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin">
                        Please wait
                      </Loader2>
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Name</Label>
                  <Input
                    placeholder="eg. Hardik"
                    id="tabs-demo-current"
                    type="text"
                    name="name"
                    value={signupInput.name}
                    required={true}
                    onChange={(e) => {
                      changeInputHandler(e, "signup");
                    }}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">Email</Label>
                  <Input
                    placeholder="eg. hardik@gmail.com"
                    id="tabs-demo-new"
                    type="email"
                    name="email"
                    value={signupInput.email}
                    required={true}
                    onChange={(e) => {
                      changeInputHandler(e, "signup");
                    }}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-password">Password</Label>
                  <Input
                    id="tabs-demo-password"
                    type="password"
                    required={true}
                    name="password"
                    value={signupInput.password}
                    placeholder="eg. hardik123"
                    onChange={(e) => {
                      changeInputHandler(e, "signup");
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  disabled={registerIsLoading}
                  onClick={() => {
                    handleRegistration("signup");
                  }}
                >
                  {registerIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin">
                        Please wait
                      </Loader2>
                    </>
                  ) : (
                    "Signup"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
