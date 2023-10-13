import React from "react";
import { Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import hero from "../assets/main/home.png";
import axios from "axios";
import Swal from "sweetalert2";

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const result = await Swal.fire({
        title: "Do you want to Register With EyeZen",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      });

      if (result.isConfirmed) {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name: values.name,
            email: values.email,
            mobile: values.phone,
            password: values.password,
          }
        );
        Swal.fire(
          "Congratulations! You Have Successfully Registered with EyeZen",
          "",
          "success"
        );
        navigate("/login");
      } else {
        Swal.fire("Registraion Cancelled", "", "error");
      }
    } catch (err) {
      console.log(err);
      const res = err.response.statusText === "Conflict";
      if (res) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Already exists",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      }
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        <Option value="86">+94</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="grid lg:grid-cols-2 px-12 py-20 pt-10 lg:pt-0 lg:px-32 gap-10">
      <div className="md:pl-10">
        <div>
          <span className="text-[46px] font-extrabold text-[#004AAD] pt-5">
            Register
          </span>
        </div>
        <div className="md:pl-10">
          <h2 className="pt-8 font-semibold">
            Create an Account for Visual Wellness
          </h2>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <div className="pt-4">
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
                hasFeedback
              >
                <Input
                  className=" p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Full Name"
                />
              </Form.Item>
            </div>

            <div className="pt-2">
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Email"
                  className=" p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </Form.Item>
            </div>
            <div className="pt-2">
              <Form.Item
                type="Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (/^\d{10}$/.test(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Phone number must be 10 digits and contain only numbers."
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input
                  addonBefore={prefixSelector}
                  placeholder="Phone Numbe"
                  className=" p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </Form.Item>
            </div>

            <div className="pt-2">
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters.",
                  },
                  {
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
                  },
                  // Add other relevant rules here
                ]}
                hasFeedback
              >
                <Input.Password className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
              </Form.Item>
            </div>

            <div className="pt-2">
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password className=" p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
              </Form.Item>
            </div>
            <div>
              <div className="pt-2 flex justify-center">
                <Form.Item>
                  <button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#004AAD] text-white font-bold px-6 py-3 rounded-md hover:bg-blue-800 "
                  >
                    Register
                  </button>
                </Form.Item>
              </div>
            </div>
            <div className="pt-2 text-center">
              <Link
                to="/login"
                className="text-[#004AAD] text-lg hover:underline"
              >
                Already a member? Login
              </Link>
            </div>
          </Form>
        </div>
      </div>

      <div>
        <img
          className="rounded-3xl lg:h-[635px] h-full w-full object-cover"
          src={hero}
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
