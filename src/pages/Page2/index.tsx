import React from "react";
import { useStyles } from "./Style";

export const Page2Content = () => {
  const classes = useStyles();
  return (
    <iframe
      className={classes.root}
      src="https://pilif.eu"
      title="Pilif.eu Page"
    />
  );
};

export const Page2Background = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
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

export const Page2Title = "Pilif.eu";
