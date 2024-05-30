"use client";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../config";
import { useRouter } from "next/navigation";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA resolved.");
          },
          "expired-callback": () => {
            console.log("reCAPTCHA expired. Please solve the reCAPTCHA again.");
          },
        }
      );
      window.recaptchaVerifier.render().catch((error) => {
        console.error("Error rendering reCAPTCHA: ", error);
      });
    }
  }, [auth]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+91${phoneNumber.replace(/\D/g, "")}`;
      console.log("Formatted Phone Number:", formattedPhoneNumber);
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setPhoneNumber("");
      alert("OTP has been sent");
    } catch (error) {
      console.error("Error during sending OTP: ", error);
    }
  };

  const handleOTPSubmit = async () => {
    try {
      await confirmationResult.confirm(otp);
      setOtp("");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during OTP confirmation: ", error);
    }
  };

  return (
    <div>
      <div id="recaptcha-container"></div>
      {!otpSent && (
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter Phone Number with Country Code"
          className="border text-black border-gray-500 p-2 rounded-md"
        />
      )}
      {otpSent && (
        <input
          type="text"
          value={otp}
          onChange={handleOTPChange}
          placeholder="Enter OTP"
          className="border border-gray-500 p-2 rounded-md"
        />
      )}
      <button
        onClick={otpSent ? handleOTPSubmit : handleSendOtp}
        className={`bg-${
          otpSent ? "green" : "blue"
        }-500 text-white p-2 rounded-md m-2`}
        style={{ backgroundColor: otpSent ? "green" : "blue" }}
      >
        {otpSent ? "Submit OTP" : "Send OTP"}
      </button>
    </div>
  );
}
