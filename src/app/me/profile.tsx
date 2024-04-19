"use client";
import { useAppContext } from "@/app/AppProvider";
import envConfig from "@/config";
import React, { useEffect } from "react";

export default function Profile() {
  const { sessionToken } = useAppContext();
  useEffect(() => {
    const fetchRequest = async () => {
      const resuilt = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      ).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
      console.log(resuilt);
    };
    fetchRequest();
  }, [sessionToken]);
  return <div></div>;
}
