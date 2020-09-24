import React from "react";
import { useStyles } from "./Style";

export const Page3Content = () => {
  const classes = useStyles();
  return (
    <iframe
      className={classes.root}
      src="https://studio.pilif.eu"
      title="Pilif.eu Page"
    />
  );
};

export const Page3Background = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#ccc"
      }}
    ></div>
  );
};

export const Page3Title = "Studio (.net core)";
