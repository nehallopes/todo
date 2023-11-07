import React from "react";
import { useState, useEffect } from "react";
import { useResource } from "react-request-hook";
import ThemeItem from "./ThemeItem";

export default function ChangeTheme({ theme, setTheme }) {

  const [themes, getThemes] = useResource((getThemes) => ({
    url: "/themes",
    method: "get",
  }));

  const { data, isLoading } = themes;

  useEffect(getThemes, []);

  function isActive(t) {
    return (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
    );
  }
  return (
    <div>
      {isLoading && " Loading themes..."}
      Change theme:
      {data &&
        data.map((t, i) => (
          <ThemeItem
            key={"theme-" + i}
            theme={t}
            active={isActive(t)}
            onClick={() => setTheme(t)}
          />
        ))}{" "}
    </div>
  );
}