import React from "react";
import { useStyles } from "./Style";

export const Page1Content = () => {
  const classes = useStyles();
  return (
    <iframe
      className={classes.root}
      src="https://page.pilif.eu"
      title="Pilif.eu Page"
    />
  );
};

export const Page1Background = () => {
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
